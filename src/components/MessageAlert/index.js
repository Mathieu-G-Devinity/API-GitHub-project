import React from 'react'
import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types';

const MessageAlert = ({countResults}) => <Message floating>La recherche a donné {countResults} résultats</Message>

//On valide nos props
MessageAlert.propTypes = {
  countResults: PropTypes.number.isRequired,
};

export default MessageAlert
