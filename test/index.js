'use strict';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../src/i18n';

configure({ adapter: new Adapter() });

const tests = require.context('.', true, /\.js?$/);
tests.keys().forEach(tests);
