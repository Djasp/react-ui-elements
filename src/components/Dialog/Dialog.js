/**
 * Created by bobbeugels on 01/05/17.
 */

'use strict';
import React from 'react';
import { Modal } from 'semantic-ui-react';
import { Button } from '../../index.js';
import Alert from '../../icons/Alert';
import PropTypes from 'prop-types';
import { I18n } from 'react-i18next';

class Dialog extends React.Component {

  render() {
    const { className, optional, content, label, alert, actionName, ...rest } = this.props;
    const classes = 'vn-dialog' + (className ? ` ${className}` : '');

    const actions = optional ? '' : (
      <I18n ns={['uielements']}>
        {
          (t) => {
            const cancelName    = alert ? t('Cancel') : t('Close');

            return <Modal.Actions>
              <Button secondary onClick={this.props.onClose}>
                {cancelName}
              </Button>
              <Button primary labelPosition='right' onClick={this.props.onActionClick}>
                {actionName}
              </Button>
            </Modal.Actions>
          }
        }
      </I18n>
    );

    const alertIndicator = alert ? (
      <div className="alert">
        <Alert />
      </div>
    ) : '' ;

    return (
      <Modal
        className={classes}
        closeOnDimmerClick={!alert}
        closeOnEscape={!alert}
        closeIcon={!alert}
        {...rest}
      >
        {alertIndicator}
        <div>
          <Modal.Header>{label}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {content}
            </Modal.Description>
          </Modal.Content>
          {actions}
        </div>
      </Modal>
    )
  }
}

Dialog.propTypes = {
  className: PropTypes.string,
  optional: PropTypes.bool,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  label: PropTypes.string.isRequired,
  alert: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  open: PropTypes.bool,
  actionName: PropTypes.string,
  onActionClick: PropTypes.func,
  onClose: PropTypes.func
};

export default Dialog;
