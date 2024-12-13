import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import Card from "../components/Card";
import Filter from "../components/Filter"; // Import the filter component
import config from "../components/chatbot/config.jsx";
import MessageParser from "../components/chatbot/MessageParser.jsx";
import ActionProvider from "../components/chatbot/ActionProvider.jsx";


const HomePage = ({ animals }) => {
  // State to hold filtered data
  const [filteredAnimals, setFilteredAnimals] = useState(animals);
  // State to toggle chatbot visibility
  const [showChatbot, setShowChatbot] = useState(false);
  const imgSrcChat =
    "https://res.cloudinary.com/dmvawq2ak/image/upload/v1733853906/chatbubble_svhz1k.png";

  return (
    <div>
      {/* Toggle Chatbot Button Inline css because it was not working correctly in the App.css*/}
      <img
        src={imgSrcChat}
        alt="Chat"
        onClick={() => setShowChatbot((prev) => !prev)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "50px",
          height: "50px",
          cursor: "pointer",
        }}
      />

      {/* Chatbot Overlay and Inline css because it was not working correctly in the App.css*/}
      {showChatbot && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            zIndex: 999,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >

          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <div className="homepage">
        {/* Include the Filter component */}
        <div className="homepage-filters">
          <Filter originalData={animals} setData={setFilteredAnimals} />
        </div>
        {/* Animal cards display */}
        <div>
          <h1 className="navbar-title">AdoptMe</h1>
          <div className="card-container">
            {filteredAnimals.map((animal) => (
              <Card key={animal.id} animal={animal} />
            ))}
          </div>
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
