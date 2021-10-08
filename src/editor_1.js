import { React, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';


import Editor_2 from "./editor_2"
import './monaco.css'




const useStyles = makeStyles((theme) => ({
  controls_1: {
    padding: theme.spacing(2),
    textAlign: "center",
    border: "solid",
    borderColor: "violet",
    margin: 10,
  },
  controls_2: {
    padding: theme.spacing(0),
    textAlign: 'center',
    border: "solid",
    borderColor: "blue",
    margin: 10,
    display: 'inline-flex',
  },
  controls_3: {
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
    padding: theme.spacing(1),
    textAlign: 'left',
    border: 'solid',
    borderColor: 'black',
    margin: 10,
  },
  formControl: {
    minWidth: 120,
    width: "-webkit-fill-available"
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




















function Editor_1(props) {
  const classes = useStyles();


  const [hook, setHook] = useState({
      'code': '',
      'lang': 'python',
      'output': '',
      'perm': false
  })


  console.log("render Editor_1",hook)



  const handleLangChange = (event) => {
    props.websocket.send(JSON.stringify({code:'',lang:event.target.value}))
  };




  props.websocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    
    console.log(data['code'])
    console.log(data['lang'])
    console.log(data['output'])
    console.log(data['perm'])
    setHook({
        'code': data['code'],
        'lang': data['lang'],
        'output': data['output'],
        'perm': data['perm']
    })
  };  
    
 
  function submit_code(){
    props.websocket.send(JSON.stringify({code:hook['code'],lang:'compile'}))
  }



  return (
    <Grid container
      direction="row"
      justifyContent="space-around"
      alignItems="stretch"
    >

      <Grid item xs={12}>

        <Grid container direction="column" >

          <Grid item xs={12} style={{ border: '5px solid red' }}>

            <Grid container direction="row">

              {/* Lang & I/O */}

                <Grid item xs={6}>
                  <Paper className={classes.controls_1}>
                    <Grid container
                      direction="row"
                      justifyContent="space-between"
                      className="controls_1" >

                      <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                          <Select
                            value={hook['lang']}
                            onChange={handleLangChange}
                            className={classes.selectEmpty}
                          >
                            <MenuItem value={"cpp"}><b>C++</b></MenuItem>
                            <MenuItem value={"java"}><b>Java</b></MenuItem>
                            <MenuItem value={"python"}><b>Python</b></MenuItem>
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

                <Grid item xs={3}></Grid>
                
                <Grid item xs={3}>
                  <Paper className={classes.controls_2} >


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

            </Grid>
          
          </Grid>


          <Grid item xs={12} style={{ border: '5px solid brown' }}>

            {/*  Editor & Output */}
            <Grid container direction="row">

              <Grid item xs={6} >
                <Paper className={classes.text}>
                  <Editor_2
                    lang={hook['lang']}
                    websocket={props.websocket}
                    hook={hook}
                     />
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.controls_3} >
                  {/*  <Output/> */}
                  <pre className={classes.pre}>{hook['output']}</pre>
                </Paper>
              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Grid >

    </Grid>
  )

}

export default Editor_1;
