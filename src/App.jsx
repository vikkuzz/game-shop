import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameList from "./components/GameList/GameList";
import GameListItem from "./components/GameListItem/GameListItem";
import Header from "./components/Header/Header";

function App() {
  const{games} = useSelector((state)=>state.gameReducer)
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/games" element={<GameList/>} exact/>
          <Route path="/games/:id" element={<GameListItem />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
