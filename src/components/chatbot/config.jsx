import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage("Welcome to AdoptMe! You can ask me the following questions:"),
    createChatBotMessage("- What is AdoptMe about?"),
    createChatBotMessage("- Tell me about AdoptMe."),
    createChatBotMessage("- How can I adopt an Animal through your website?"),
    createChatBotMessage("- How can I adopt?"),
    createChatBotMessage("- Are your animals sterilised or vaccinated?"),
    createChatBotMessage("- Are your animals sterilised?"),
    createChatBotMessage("- Are your animals vaccinated?"),
  ],

  customStyles: {
    // inline Styles to not mess with the App.css
    botMessageBox: {
      backgroundColor: "#507231",
      color: "white",
      borderRadius: "10px",
      padding: "10px",
    },
    chatButton: {
      backgroundColor: "#507231",
      color: "white",
      borderRadius: "50%",
      fontSize: "18px",
    },
    userMessageBox: {
      backgroundColor: "#507231",
      color: "#333",
      borderRadius: "10px",
      padding: "10px",
    },
    header: {
      backgroundColor: "#4CAF50",
      color: "white",
      fontSize: "20px",
      padding: "15px",
      textAlign: "center",
      fontWeight: "bold",
    },
  },
};

export default config;

