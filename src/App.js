import './App.css';
import StoreContainer from "./container/StoreContainer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from 'react';
import RecordsList from './components/RecordsList';
import Title from './components/Title';
import UserPage from './components/UserPage';

const App = () => {

  
  let allRecords = [
    {title: "Illmatic", artist: "Nas"},
    {title: "Stankonia", artist: "Outkast"},
    {title: "Ctrl", artist: "SZA"},
    {title: "To Pimp A Butterfly", artist: "Kendrick Lamar"},
    {title: "Vacation", artist: "Sainte"},
    {title: "Rumours", artist: "Fleetwood Mac"},
    {title: "Nevermind", artist: "Nirvana"},
    {title: "The Black Album", artist: "Jay-Z"},
    {title: "The Melodic Blue", artist: "Baby Keem"},
    {title: "Ivory", artist: "Omar Apollo"},
    {title: "Channel Orange", artist: "Frank Ocean"},
  ]

  let user1 = {name: "Jamie", basket: []}
  
  const [records, setRecords] = useState(allRecords)
  const [user, setUser] = useState(user1)

  const handleClick = (data) => {
    const album = records[data]
    user.basket.push(album)
    let updatedUser = {name: user.name, basket: user.basket}
    setUser(updatedUser)
  }

  return (
    <Router>
      <Title />
      <Routes>
        <Route path="/" element={<StoreContainer />} />
        <Route path="/all" element={<RecordsList records={records} handleClick={handleClick}/>} />
        <Route path="/account" element={<UserPage user={user}/>} />
      </Routes>
    </Router>
  );
}

export default App;
