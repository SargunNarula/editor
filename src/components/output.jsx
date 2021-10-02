import {useState} from 'react';
import raw from './file.txt';

function Output(props) {

    console.log("\n\n\nRendering Output Component\n\n\n")

    const [a, setA] = useState('')

    fetch(raw)
      .then(r => r.text())
      .then(text => {
        console.log('text decoded:', text);
	setA(text)  
      });


    return(
            <>
	      <pre>{a}</pre>
	    </>
           )
}

export default Output
