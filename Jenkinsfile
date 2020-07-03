#!/groovy

pipeline {
    agent { node { label 'linux' } }

    options {
        timeout(time: 15, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    tools {
        nodejs 'Node10'
    }

    environment {
        NPM_AUTH_TOKEN_TM=credentials('Npm_bluemarble')
        NPM_AUTH_TOKEN_DYNA=credentials('NPM_dyna')
        NEXUS_AUTH_TM='//nexus.tmbmarble.com/repository/npm-hosted/:_authToken=${NPM_AUTH_TOKEN_TM}'
        NEXUS_AUTH_DYNA='//nexus.dynacommercelab.com/repository/npm-hosted/:_authToken=${NPM_AUTH_TOKEN_DYNA}'
        IMAGE='dockerhub.tmbmarble.com/omnius-vnext/general-ui-storybook'
    }

    stages {
        stage('Prepare') {
            steps {
                echo 'Preparing..'
                sh '''
                    npm install
                '''
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh '''
                    npm run build
                    npm run build:language
                    npm run build-storybook
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh '''
                    npm run lint
                    npm run test
                '''
            }
        }
        stage('Sonarqube') {
            when {
                expression { BRANCH_NAME ==~ /(develop|.*quality.*)/ }
            }
            environment {
                scannerHome = tool 'SonarQube Scanner'
            }
            steps {
                echo 'Analyzing code'
                withSonarQubeEnv('My SonarQube Server') {
                    script {
                        def scannerHome = tool name: 'SonarQube Scanner'
                        sh '''
                            PACKAGE_VERSION=\$(npm view . version)
                            ${scannerHome}/bin/sonar-scanner \
                                -Dsonar.host.url=${SONAR_HOST_URL} \
                                -Dsonar.login=${SONAR_AUTH_TOKEN} \
                                -Dsonar.projectVersion=\$PACKAGE_VERSION
                        '''
                    }
                }
                timeout(time: 10, unit: 'MINUTES') { // Just in case something goes wrong, pipeline will be killed after a timeout
                    script {
                        def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
                        if (qg.status != 'OK') {
                            error "Pipeline aborted due to quality gate failure: ${qg.status}"
                        }
                    }
                }
            }
        }
        stage('Dockerize') {
            when {
                expression { BRANCH_NAME ==~ /develop/ }
            }
            steps {
                echo 'Dockerizing...'
                sh '''
                    docker build -t $IMAGE .
                    docker push $IMAGE
                '''
            }
        }
        stage('Deploy') {
            when {
                expression { BRANCH_NAME ==~ /develop/ }
            }
            steps {
                build job: 'k8s/kube-vnext/2.0.0', parameters: [
                    string(name: 'namespace', value: 'dev-omnius-vnext'),
                    string(name: 'image', value: String.valueOf(IMAGE) + ':latest')
                ], wait: true
            }
        }
        stage('Publish') {
            when { expression { BRANCH_NAME ==~ /(develop|master|release.*)/ } }
            steps {
                sh '''
                    PACKAGE_NAME=$(cat package.json | jq -r '.name')
                    NEXT_VERSION=\$(npm view . version)
                    CURRENT_VERSION=\$(node -p "require('./package').version")
                    if [ "$CURRENT_VERSION" = "$NEXT_VERSION" ] ; then
                        echo "Versions are same. Skipping publish"
                    else
                        echo ${NEXUS_AUTH_TM} >> \$HOME/.npmrc
                        npm publish --'@omnius:registry=https://nexus.tmbmarble.com/repository/npm-hosted/'
                        echo ${NEXUS_AUTH_DYNA} >> \$HOME/.npmrc
                        npm publish --'@omnius:registry=https://nexus.dynacommercelab.com/repository/npm-hosted/'
                    fi
                '''
            }
        }
    }
    post {
        always {
            echo 'Finished.'
            script {
                if (BRANCH_NAME.startsWith('PR')) {
                    env.channel = '#vnext-pull-requests'
                } else {
                    env.channel = '#vnext-ci'
                }
            }
            publishHTML target: [
                allowMissing         : false,
                alwaysLinkToLastBuild: false,
                keepAll              : true,
                reportDir            : 'reports/coverage/lcov-report',
                reportFiles          : 'index.html',
                reportName           : 'Code coverage'
            ]
        }
        failure {
            slackSend channel: env.channel, color: "danger", message: "Build Failed: <${env.JOB_DISPLAY_URL}|${env.JOB_NAME}> <${env.RUN_DISPLAY_URL}|#${env.BUILD_NUMBER}>"
        }
        success {
            slackSend channel: env.channel, color: "good", message: "Build Passed: <${env.JOB_DISPLAY_URL}|${env.JOB_NAME}> <${env.RUN_DISPLAY_URL}|#${env.BUILD_NUMBER}>"
        }
    }
}
