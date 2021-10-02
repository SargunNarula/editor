import React,{useState, useEffect} from 'react';
import MonacoEditor from 'react-monaco-editor'
import useLocalStorage from '../hooks/useLocalStorage'


function SimpleEditor(props) {

	// Defaults

  const default_code_python = `
# Online Python compiler.
# Write Python 3 code in this online editor and run it.
print("Hello world")`

  const default_code_cpp = `
// Your First C++ Program

#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}`

  const default_code_java = `
class Simple{
    public static void main(String args[]){
     System.out.println("Hello Java");
    }
}` 














  
  const handle_submit=(newValue,event)=> {
        setCode(newValue)

        // We are sending code to parent to make API call in parent
        props.parent_function(newValue)

    }

 
  // To map frontend language name to backend language name	
  const map = {
    "cpp":["cpp",default_code_cpp],
    "java":["java",default_code_java],
    "python3":["python",default_code_python]
    }

    const [code, setCode] = useState(() => {
 			console.log("getting stored value")
  			const saved = localStorage.getItem("code");
	    		if(saved==null){console.log("Not found"); return ""}
  			//const initialValue = JSON.parse(saved);
	    		else{console.log("found"); return saved}
	    		//return saved || "";
		})

    console.log("\n\n\nbreak",code)

    const [lg, setlg]  = useState('')

    useEffect(() => {
	console.log("Inside 1st hook")
      	setCode(map[props.lang][1])
	change_l(map[props.lang][0])
	console.log(code,l)
	console.log("Leaving 1st hook")
     },[props.lang]);

    useEffect(() => {
	console.log("Inside 2nd hook -",code)
	localStorage.setItem("code", code);
	localStorage.setItem("lang", l);
	console.log(code,l)
	if (l!=props.lang){
	   setCode(code)
	}
	console.log(code,l)
	console.log("Leaving 2nd hook")
    }) 
    
    console.log("Just before run")
    return( 
        	    <MonacoEditor
			height="800"
                	language={lg} 
			theme="dark"
			options={{
		       		selectOnLineNumbers: true,
                   		minimap:{ enabled:"false" }
				}}
                	//defaultValue="print('Hello')"  
	    		value={code}
                	onChange={ handle_submit  }
            	/>
        
    	   )
}

export default SimpleEditor
