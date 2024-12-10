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

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleAboutPage,
            handleAdoptQuery,
            handleSterilisationVaccinationQuery, // Add the new action
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
