import PropTypes from "prop-types";
import Message from "./Message";

function MessageList({messageList, currentUser}) {
  return (
    <>
      {messageList.map((message, id) => {
        return (
          <Message key={id} message={message} currentUser={currentUser} />
        );
      })}
    </>
  );
}

MessageList.propTypes = {
  messageList: PropTypes.array,
  currentUser: PropTypes.number
}

export default MessageList;