import "./App.css";
import {Routes, Route} from "react-router-dom";

function App() {

return (
  <Routes>
  <Route path='/Homepage' element={<HomePage/>}/>
  <Route path='/details/:cardId' element={<DetailsPage/>}/>
  <Route path='/about' element={<AboutPage />} />
  <Route path='*' element={<NotFoundPage />}/>
</Routes>
)
  
}

export default App

