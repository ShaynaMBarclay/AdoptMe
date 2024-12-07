import { useState } from "react";
import Chatbot from 'react-chatbot-kit';
import Card from "../components/Card";
import Filter from "../components/Filter"; // Import the filter component
import config from '../components/chatbot/config.js';
import MessageParser from '../components/chatbot/MessageParser.jsx';
import ActionProvider from '../components/chatbot/ActionProvider.jsx';


const HomePage = ({ animals }) => {
  // State to hold filtered data
  const [filteredAnimals, setFilteredAnimals] = useState(animals);
   // State to toggle chatbot visibility
   const [showChatbot, setShowChatbot] = useState(false);


  return (
    <div>
    {/* Toggle Chatbot Button */}
    <button 
      onClick={() => setShowChatbot((prev) => !prev)} 
      style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}
    >
      {showChatbot ? "Close Chatbot" : "Open Chatbot"}
    </button>
 

    {/* Chatbot Overlay */}
    {showChatbot && (
      <div className="chatbot-overlay">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
        
      </div>
      
    )}
    <div className="homepage">
      {/* Include the Filter component */}
      <Filter originalData={animals} setData={setFilteredAnimals} />

      {/* Animal cards display */}
      <div className="card-container">
        {filteredAnimals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default HomePage;

// const location = useLocation(); // To capture navigation state

// useEffect(() => {
//   if (location.state?.refresh) {
//     fetchAnimals();
//   }
// }, [location.state]);
