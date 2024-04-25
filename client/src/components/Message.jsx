import PropTypes from "prop-types";

function Message({message, currentUser}) {
  return (
    <p
      className={message.id === currentUser ? "my-message" : "message"}
    >
      <strong>{message.author}</strong>: {message.text}
    </p>
  );
}

Message.propTypes = {
  message: PropTypes.object,
  currentUser: PropTypes.number
}

export default Message;