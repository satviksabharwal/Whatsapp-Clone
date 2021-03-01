import React, {useState, useEffect} from "react";
import "../Styles/SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
       setSeed(Math.floor(Math.random()*5000)); 
    }, []);

    return(
        <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last Message...</p>
        </div>
        </div>
    );
}

export default SidebarChat;
