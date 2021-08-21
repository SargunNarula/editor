import React from 'react'


import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

//import 'codemirror/mode/clike/C'
//import 'codemirror/mode/text/x-java'
import 'codemirror/mode/python/python'


import { Controlled as ControlledEditor } from 'react-codemirror2'


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper_title: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
    justifyContent: 'space-between',
    //backgroundColor: brown,
    //color: white,
    //padding: 5,
    //border-top-right-radius: .5rem,
    //border-top-left-radius: .5rem,
  },
  paper_editor: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#2196f3"
  },
  button_c:{
    backgroundColor: "#2196f3"
  },

}));


function Editor(props){

	//Destructuring Props
	const { language, displayName, value, onChange } = props
	
	const classes = useStyles();

	const [lang, setlang] = React.useState(language);
	console.log("Initially -",lang)

  	const handleLangChange = (event) => {
    		setlang(event.target.value);
		console.log(lang)
  		};



	
	//Function to handle change in writing editor code
	function handleChange(editor, data, value){

		onChange(value)

	}


	return(

		<Grid container spacing={3}>

		 <Grid item xs={12}>
                    <Paper className={classes.paper_title}>
			{/*Div 1*/}
			<FormControl className={classes.formControl}>
        		  <Select
          		    value={lang}
          		    onChange={handleLangChange}
          		    displayEmpty
          		    className={classes.selectEmpty}
          		    inputProps={{ 'aria-label': 'Without label' }}
        		  >
          		    <MenuItem value={"C++"}>C++</MenuItem>
          		    <MenuItem value={"Java"}>Java</MenuItem>
          		    <MenuItem value={"Python"}>Python</MenuItem>
        		  </Select>
      			</FormControl>
		        
		  	<Button
        		  variant="contained"
		   	  color="primary"        		  
        		  className={classes.button}
        		  endIcon={<SendIcon className={classes.button_c}>send</SendIcon>}
      			>
        		RUN
      			</Button>

		   		{displayName}
		   		<button>O/C</button>
		       
		    </Paper>
		 </Grid>


		 <Grid item xs={12}>
                    <Paper className={classes.paper_editor}>
		   {/*Div 1*/}
		   <ControlledEditor

		   onBeforeChange ={handleChange}
		   value          ={value}
		   className      ="code-mirror-wrapper"
		   options={{
		   		lineWrapping :true,
		   		lint         :true, 
		   		mode         :language,
		   		lineNumbers  :true,
				theme        :'material',
				autocorrect  :true
		   	   }}
		   />
		    </Paper>
		</Grid>


		
		</Grid>
		
	)


}

export default Editor;
