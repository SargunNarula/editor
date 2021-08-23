import React, { useState } from "react";
import { ControlledEditor as MonacoEditor } from "@monaco-editor/react";
export const Editor = () => {
  const [code, setCode] = useState(`const greeting = () => {
    alert("Hello world");
}`);

  const options = {
    minimap: {
      enabled: false
    }
  };

  const changeHandler = (evt, newText) => {
    setCode(newText);
  };

  const editorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
  };

  return (
    <MonacoEditor
      width="100%"
      height="100%"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
      onChange={changeHandler}
      editorDidMount={editorDidMount}
    />
  );
};
