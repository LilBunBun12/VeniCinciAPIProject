import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import BanList from './components/BanList';
import './App.css';

function App() {
  const [text,setText] = useState("Default Text");
  const [data,setData] = useState(null);
  const [banItems,setBanItems] = useState(new Set());
  
  const request = async () => {
    let response = await axios.get("https://randomuser.me/api/");
    let temp = response.data.results[0];
    let name = temp.name.first + " " + temp.name.last;
    let location = temp.location.country;
    let age = temp.dob.age;
    while(banItems.has(name) || banItems.has(location) || banItems.has(age))
    {
      response = await axios.get("https://randomuser.me/api/");
      temp = response.data.results[0];
      name = temp.name.first + " " + temp.name.last;
      location = temp.location.country;
      age = temp.dob.age;
    }
    setData(response.data.results[0]);
  }
  useEffect(() => {
    request();
  },[])

  useEffect(() => {
    console.log(banItems);
  },[banItems]);

  useEffect(() => {
    console.log(data);
  },[data]);

  return (
    <div>
      {data? <UserCard user ={data} banItems = {banItems} setBanItems = {setBanItems}/> : <p>Loading...</p> }
      <button onClick={request}>Next Person</button>
      <BanList banItems = {banItems} setBanItems = {setBanItems}/>
    </div>
  )
}

export default App
