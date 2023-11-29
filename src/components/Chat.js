import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import { db } from '../firebase';

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages').orderBy('createAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])  
  return (
    <div>
        <SignOut/>
        {messages.map(({id, text, photoURL}) => {
          <div key={id}>
              <img src={photoURL} alt=""></img>
              <p>{text}</p>
          </div>
        })}
    </div>
  )
}

export default Chat