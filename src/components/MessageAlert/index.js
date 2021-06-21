import React from 'react'
import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types';

const MessageAlert = ({message}) => <Message floating>{message}</Message>

//On valide nos props
MessageAlert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageAlert
