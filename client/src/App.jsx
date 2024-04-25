import { useState, useEffect } from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";

function App() {
  const [messageList, setMessageList] = useState([]);
  /**
   * Structure d'un message
   * {
   *     author: "nickname",
   *     text: "message"
   *     id: currentUser
   * }
   */
  const [nickName, setNickName] = useState("");
  const [newMessageText, setNewMessageText] = useState("");
  const [socket, setSocket] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //!TO DO: submit message to server
  };

  // Au montage de la page
  useEffect(() => {
    //!TO DO création de la connexion avec le serveur
  }, []);

  // Mise à jour de la liste des messages
  useEffect(() => {
    //!TO DO: récupération des messages du serveur
  }, [messageList, socket]);

  return (
    <div className="App">
      <h2>My online chat</h2>
      <MessageList messageList={messageList} currentUser={currentUser} />
      <MessageForm
        handleSubmit={handleSubmit}
        nickName={nickName}
        setNickName={setNickName}
        newMessageText={newMessageText}
        setNewMessageText={setNewMessageText}
      />
    </div>
  );
}

export default App;
