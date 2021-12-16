class ActionProvider {
   constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
    this.lastOption = "" //you'd have to do it here so it's not bypassed by the message parser. Could do it by depth. Maybe pop it off like a stack?

  }

  greet(){
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }

  handleJavascriptList = () => {
    this.lastOption = "javascriptLinks"
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on explainable AI:",
      {
        widget: "xaiTest",
      }
    );

    this.updateChatbotState(message);
  };

  handleXaiList = () => {
    this.lastOption = "xai"
    const message = this.createChatBotMessage(
      "Fantastic, we have lots on XAI! Do you prefer videos or blogs?:",
      {
        widget: "xaiTest",
      }
    );

    this.updateChatbotState(message);
  };

  reset = () => {
    const message = this.createChatBotMessage(
      `Oh, so what do you want to learn about?`, {
          widget: "options"
        }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
    this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;
