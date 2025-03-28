import {useState,useEffect} from 'react';
import "./BanList.css"


function BanList ({banItems , setBanItems}){

    const removeBanItem = (item) =>{
        const newSet = new Set(banItems);
        newSet.delete(item);
        setBanItems(newSet);
    };

    return(
        <div className = "container">
            <p>BanList</p>
            <div className = "listContainer">
                {
                    [...banItems].map((item,index) => (<button key ={index} onClick = {() => removeBanItem(item)}>{item}</button>))
                }
            </div>
        </div>
    );
}

export default BanList;