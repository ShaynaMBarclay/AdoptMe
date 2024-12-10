import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello')) {
      actions.handleHello();
    } else if (
      lowerCaseMessage.includes('what is adoptme about') ||
      lowerCaseMessage.includes('tell me about adoptme')
    ) {
      actions.handleAboutPage();
    } else if (
      lowerCaseMessage.includes('how can i adopt an animal') ||
      lowerCaseMessage.includes('how can i adopt')
    ) {
      actions.handleAdoptQuery();
    } else if (
      lowerCaseMessage.includes('are your animals sterilised') ||
      lowerCaseMessage.includes('are your animals vaccinated')
    ) {
      actions.handleSterilisationVaccinationQuery(); // Call the new action
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
