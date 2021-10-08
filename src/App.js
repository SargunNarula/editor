import React from 'react'
import Editor_1 from './editor_1'


function App(){

    console.log("render App2")
    const websocket = new WebSocket('ws://127.0.0.1:8000/ws/code/')
    
    websocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
      };
      
    return(
        <Editor_1 websocket={websocket} />
    )

}


export default App