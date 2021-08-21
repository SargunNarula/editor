import {useState, useEffect} from 'react'
import Editor from './Editor'
import useLocalStorage from './hooks/useLocalStorage'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './my.css'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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

    <div className="overall" >

     <Grid container 
	   className="container"
	   spacing={6}
	   direction="row"
           justifyContent="center"
	   alignItems="stretch"
	   >

        <Grid item xs={3}>
          <Paper className={classes.paper}>Problem Statement
	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
	  </Paper>
        </Grid>
	
	<Grid item xs={4}>

          <Paper className={classes.paper}>

	   
	   <div className="pane top-pane">

       
              <Editor language="python" displayName="PYTHON"  value={python}  onChange={setpython}  />
       

           </div>

	  </Paper>
	</Grid>

	<Grid item xs={3}>
          <Paper className={classes.paper}>OutPut</Paper>
        </Grid>

      </Grid>
   </div>
   )

}

export default App;
