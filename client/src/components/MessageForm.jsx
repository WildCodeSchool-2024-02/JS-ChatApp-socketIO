import PropTypes from "prop-types";

function MessageForm({
  handleSubmit,
  nickName,
  setNickName,
  newMessageText,
  setNewMessageText,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>New Message</h2>
      <input
        type="text"
        name="author"
        placeholder="nickname"
        value={nickName}
        required
        onChange={(e) => setNickName(e.target.value)}
      />
      <input
        type="text"
        name="messageContent"
        placeholder="message"
        value={newMessageText}
        required
        onChange={(e) => setNewMessageText(e.target.value)}
      />
      <input type="submit" value="send" />
    </form>
  );
}

MessageForm.propTypes = {
  handleSubmit: PropTypes.func,
  nickName: PropTypes.string,
  setNickName: PropTypes.func,
  newMessageText: PropTypes.string,
  setNewMessageText: PropTypes.func
};

export default MessageForm;
