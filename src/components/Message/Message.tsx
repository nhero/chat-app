import React from "react";
import "./Message.scss";
import MessageData from "../../shared/message.interface";

const Message: React.FC<MessageData> = ({
  date,
  to,
  from,
  message,
  currentUser,
}) => (
  <div
    className={currentUser !== from ? "Message right" : "Message"}
    data-testid="Message"
  >
    <div className="date">
      {date} - user {from}
    </div>
    <div className="text">{message}</div>
  </div>
);

export default Message;
