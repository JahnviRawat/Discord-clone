import React from 'react'
import "./Message.css"
import { Avatar } from "@mui/material";

function Message() {
  return (
    <div className='message'>
      <Avatar />
      <div className="message__info">
        <h4>Jahnvi Rawat
            <span className='message__timestamp'>
                This is message timestamp
            </span>
        </h4>
        <p>This is message</p>
      </div>
    </div>
  )
}

export default Message
