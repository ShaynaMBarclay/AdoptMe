import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAboutPage = () => {
    const botMessage = createChatBotMessage(
      'AdoptMe is an animal adoption website that showcases animals in need. It includes pictures, bios, and details about each animal. You can learn more by clicking on their picture!'
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAdoptQuery = () => {
    const botMessage = createChatBotMessage(
      'Click on the Adopt "animal name" button below their picture on their detail page, fill out the form, and we will contact you within 2 weeks!'
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSterilisationVaccinationQuery = () => {
    const botMessage = createChatBotMessage(
      'Not all of our Animals are sterilised or vaccinated, however you can check by filtering out the options on the left side of the homepage!'
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // List of valid questions
  const validQuestions = [
    "What is AdoptMe about?",
    "Tell me about AdoptMe.",
    "How can I adopt an animal through your website?",
    "How can I adopt?",
    "Are your animals sterilised or vaccinated?",
    "Are your animals sterilised?",
    "Are your animals vaccinated?"
  ];

  // Add the handleFallback function to respond to unrecognized queries
  const handleFallback = () => {
    const fallbackMessage = createChatBotMessage(
      "I do not know the answer to this response. Please refer to these questions:"
    );

    // Send fallback message first
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, fallbackMessage],
    }));

    // Then send each question as a separate message
    validQuestions.forEach((question) => {
      const questionMessage = createChatBotMessage(`- ${question}`);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, questionMessage],
      }));
    });
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleAboutPage,
            handleAdoptQuery,
            handleSterilisationVaccinationQuery,
            handleFallback, // Add the fallback action here
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
