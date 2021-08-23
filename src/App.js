import {useState, useEffect} from 'react'
import useLocalStorage from './hooks/useLocalStorage'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import SimpleEditor from "./components/convert"

import './my.css'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    border: "solid",
    margin: 10,
    borderColor: "blue",
  },
  text:{
  padding: theme.spacing(2),
  textAlign: 'left',
  border: 'solid',
  borderColor: 'black',
  margin: 10
  }
}));


function App() {


  const classes = useStyles();

  const [python, setpython ] = useLocalStorage('python','')

  const [srcDoc, setSrcDoc]  = useState('')

  useEffect(()=>{
     const timeout = setTimeout(() => {
       setSrcDoc(`
         <html>
         </html>
      `
      )
     },250)
     return () => clearTimeout(timeout)
  },[python])



  return(


     <Grid container
           className="container"
           direction="row"
           justifyContent="center"
           //alignItems="stretch"
           >


          <Grid item xs={3}>
            <Paper className={classes.paper}>
	       <h1> Problem Statement </h1>
	  	<br/>  <br/> <br/> <br/> <br/> <br/> <br/>
	  	<p>Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms.</p>
            </Paper>
          </Grid>




          <Grid item xs={6}>
	    <Paper className={classes.paper}>
                              <h1>Simple  Editor</h1>
	    </Paper>
	    <Paper className={classes.text}>
                      <SimpleEditor width={"95%"}/>
	    </Paper>
          </Grid>




          <Grid item xs={3}>
            <Paper className={classes.paper}> OutPut 
	     <h1> Problem Statement </h1>
                <br/>  <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                <p>Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms.</p>
             <br/>
	    </Paper>
          </Grid>

      </Grid>
   )

}

export default App;
