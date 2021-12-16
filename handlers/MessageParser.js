class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)
    const lowerCaseMessage = message.toLowerCase()
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    }

    if (lowerCaseMessage.includes("xai")) {
      this.actionProvider.handleXaiList()
    }

    if (lowerCaseMessage.includes("no")) {
      this.actionProvider.reset()
    }
  }
}

export default MessageParser;
