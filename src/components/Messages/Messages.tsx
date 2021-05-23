import React, { useState, useEffect } from "react";
import "./Messages.scss";

import Message from "../Message/Message";
import MessageData from "../../shared/message.interface";

import axios from "axios";
import moment from "moment";

interface IMessagesProps {
  userId: number;
  chattingWithId: number;
}

const Messages: React.FC<IMessagesProps> = ({ userId, chattingWithId }) => {
  document.title = `User ${userId} - ${chattingWithId}`;
  const [chats, setChats] = useState<MessageData[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const getMessages = () => {
    axios.get("/api/messages").then((response) => {
      setChats(JSON.parse(response.data.messages));
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getMessages();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const updateMessage = () => {
    let newChats = [...chats];
    newChats.push({
      date: moment(new Date()).format("MM-DD-YY HH:mm"),
      message: newMessage,
      to: chattingWithId,
      from: userId,
    });
    setChats(newChats);

    axios
      .post("/api/messages", {
        newChats,
      })
      .then(function (response) {});
  };

  return (
    <div className="Messages" data-testid="Messages">
      <h2>
        User {userId} chatting with {chattingWithId}
      </h2>
      <input
        placeholder="Your chat goes here"
        onChange={(e) => setNewMessage(e.target.value)}
      />

      <button onClick={() => updateMessage()}>Chat</button>
      {chats.map((chat, index) => (
        <Message
          key={index}
          message={chat.message}
          to={chat.to}
          from={chat.from}
          date={chat.date}
          currentUser={userId}
        />
      ))}
    </div>
  );
};

export default Messages;
