import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import Nav from "../nav/Nav";

export default class ChatBody extends Component {
  render() {
    return (
      <>
      <Nav/>
      <br/>
      <br/>
      <br/>
 <div className="main__chatbody ">
        
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
      </>
     
    );
  }
}
