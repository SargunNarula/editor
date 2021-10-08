import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor'
import Editor from '@monaco-editor/react'

function Editor_2(props) {

    console.log("render Editor_2")
   /*  props.websocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        console.log(data['lang'])
    }; */


    const handle_change = (newValue, event) => {
        props.websocket.send(JSON.stringify({code:newValue,lang:'null'}))
    }


    // To map frontend language name to backend language name
    /* const map = {
        "cpp": ["cpp", default_code_cpp],
        "java": ["java", default_code_java],
        "python3": ["python", default_code_python]
    } */

 
    return (
        <div>
            <Editor
                height="70vh"
                language={props.hook['lang']}
                theme="vs-dark"
                options={{
                    selectOnLineNumbers: true,
                    minimap: { enabled: "false" }
                }}
                value={props.hook['code']}
                onChange={handle_change}
            />
        </div>
    )
}

export default Editor_2
