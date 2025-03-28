import { useState, useEffect } from 'react'
import axios from 'axios';
import './UserCard.css';

function UserCard ({user,banItems,setBanItems}){
    
    const addBanList = (item) =>{
        const newSet = new Set(banItems);
        newSet.add(item);
        setBanItems(newSet);
    };
    
    return( 
        <div>
            <img src={user.picture.large} alt="" />
            <div className = "Detail">
                <p>Name: </p>
                <button onClick ={ () => addBanList(user.name.first + " " + user.name.last)}>
                    {user.name.first + " " + user.name.last}
                </button>
            </div>
            <div className = "Detail">
                <p>From: </p>
                <button onClick ={ () => addBanList(user.location.country)}>
                    {user.location.country}
                </button>
            </div>
            <div className = "Detail">
                <p>Age: </p>
                <button onClick = {() => addBanList(user.dob.age)}>
                    {user.dob.age}
                </button>
            </div>
        </div> 
    );
}

export default UserCard;