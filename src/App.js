import { React, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import FormControl    from '@material-ui/core/FormControl';
import Select         from '@material-ui/core/Select';
import MenuItem       from '@material-ui/core/MenuItem';
import Button         from '@material-ui/core/Button';
import SendIcon       from '@material-ui/icons/Send';
import Divider        from '@material-ui/core/Divider';


import SimpleEditor from "./components/convert"
import './monaco.css'

const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    border: "solid",
    margin: 10,
    borderColor: "blue",
  },
  paper_middle: {
    padding: theme.spacing(2),
    border: "solid",
    borderColor: "violet",
    margin: 10,
    textAlign: "center"
  },
  paper_output: {
    padding: theme.spacing(1),
    border: "solid",
    borderColor: "blue",
    margin: 10,
    minHeight: '450px',
  },
  pre: {
    height: 'auto',
    maxHeight: '450px',
    overflow: 'auto',
    overflowY: 'none',
    backgroundColor: '#eeeeee',
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'left',
    border: 'solid',
    borderColor: 'black',
    margin: 10
  },
  formControl: {
    minWidth: 120,
    width:"-webkit-fill-available"
  },

  selectEmpty: {
    padding: theme.spacing(1)
  },

  button: {
    padding: theme.spacing(1.2),
  },
  button_c: {
    backgroundColor: "#2196f3"
  },
  controls: {
    fontSize: 'x-large',
    color: '#0398fc',
    padding: '20px'
  }
}));


function App() {


  const classes = useStyles();




  // Hooks

  const [value, setValue] = useState('');

  const [lang, setlang] = useState('python3');

  const [output, setOutput] = useState('');



  // Functions

  const handleLangChange = (event) => {
    setlang(event.target.value);
    console.log(lang)
  };


  const submit_code = () => {

    console.log("submitted code - ", value)
    axios.post('http://127.0.0.1:8000/api/code', {
      lang,
      code: value
    })
      .then((response) => {
        console.log(response);
        setOutput(response['data'])
      }, (error) => {
        console.log(error);
      });
  }



  return (


    <Grid container
      className="container"
      direction="row"
      justifyContent="space-around"
      alignItems="stretch"
    >


      <Grid item xs={3}>
        <Paper className={classes.paper}>

        </Paper>
      </Grid>




      <Grid item xs={6}>

        <Grid container direction="column" >

          <Grid item>
            <Paper className={classes.paper_middle}>
              <Grid container
                direction="row"
                justifyContent="space-between"
                className="paper_middle" >

                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <Select
                      value={lang}
                      onChange={handleLangChange}

                      className={classes.selectEmpty}

                    >
                      <MenuItem value={"cpp"}><b>C++</b></MenuItem>
                      <MenuItem value={"java"}><b>Java</b></MenuItem>
                      <MenuItem value={"python3"}><b>Python</b></MenuItem>
                    </Select>
                  </FormControl>
                </Grid>


                <Grid item xs={3}>
                  
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    fullWidth
                    onClick={submit_code}
                    endIcon={<SendIcon >
                      send
                    </SendIcon>
                    }
                  >
                    RUN
                  </Button>
                </Grid>


              </Grid>
            </Paper>
          </Grid>






          <Grid item >
            <Paper className={classes.text}>
              <SimpleEditor
                lang={lang}
                parent_function={code_value => setValue(code_value)} />
            </Paper>
          </Grid>

        </Grid>


      </Grid >




      <Grid item xs={3}>

        <Grid container direction="column" >
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{
              display: 'inline-flex',
              padding: '0px'
            }} >


              <Button color="primary" style={{ textTransform: 'None' }}>
                <b className={classes.controls}> Input </b>
              </Button>
              <Divider orientation="vertical" style={{
                height: '70px',
                marginLeft: '5px',
                width: '2px'
              }} />

              <Button color="primary" style={{ textTransform: 'None' }}>
                <b className={classes.controls}> Output </b>
              </Button>

            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper_output} >
              {/*  <Output/> */}
              <pre className={classes.pre}>{output}</pre>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )

}

export default App;
