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










    console.log("\n\n\nRender\n\n\n")




    const handle_submit=(newValue,event)=> {
        setCode(newValue)

        // We are sending code to parent to make API call in parent
        props.parent_function(newValue)

    }


    // To map frontend language name to backend language name
    const map = {

        "cpp"    : ["cpp"   ,default_code_cpp],
        "java"   : ["java"  ,default_code_java],
        "python3": ["python",default_code_python]
    
    }

    const [lg, setlg]  = useState(() => {
                        
                        const saved = localStorage.getItem("lang");
                        
                        console.log("saved language - ",saved)

                        if(saved==null){
                            return "python"
                        }

                        else {
                            return saved
                        }
                        
                })

    const [code, setCode] = useState(() => {
                        
                        const saved = localStorage.getItem("code");
                        
                        console.log("saved language - ",saved)

                        if(saved==null){
                            return default_code_python
                        }

                        else {
                            return saved
                        }
                        
                })



    const check = localStorage.getItem("lang")

    console.log("check - ",check)
    
    // To only run when we want to change language or on page refresh
    if(check!=null){
	
	console.log("props.lang -",props.lang)
        // Condition for language change
        if(props.lang!=check){
            
	    //setlg(map[props.lang][0])
	    if(map[props.lang][0]!=lg){


	   	 setlg(map[props.lang][0])
	       	 setCode(map[props.lang][1])
		 console.log("Inside lang -",lg)

	    } 
	    console.log("Outside lang - ",lg)
	    //localStorage.setItem("lang",map[props.lang][0])
	    
	    //setlg(map[props.lang][0])
	    //console.log("Now lang -",lg)
            //setCode(map[props.lang[1]]) 
            //console.log("Now code - ",code)

        }
    }

    

    useEffect( () => {
	console.log("inside useEffect")
        localStorage.setItem("lang", lg);
        localStorage.setItem("code", code);
        
    })


	//console.log("Before return")
    return(
	    <div>
	    {console.log("hii")}
	    
                    <MonacoEditor
                        height="450"
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
	</div>
           )
}

export default SimpleEditor
