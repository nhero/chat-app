interface MessageData {
  date: string,
  message: string,
  to: number,
  from: number,
  currentUser?: number,
}

export default MessageData;