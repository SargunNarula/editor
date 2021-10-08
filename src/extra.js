function submit_code (){

    console.log("submitted code - ", value)

    chatSocket.send(JSON.stringify({
      lang,
      code: value
    }))

    /* axios.post('http://127.0.0.1:8000/code', {
      lang,
      code: value
    })
      .then((response) => {
        console.log(response);
        setOutput(response['data'])
      }, (error) => {
        console.log(error);
      }); */
  }


















  function submit_code(){
  console.log(value)
}

chatSocket.onmessage = function(e) {
  const data = JSON.parse(e.data);
  console.log(data['message'])
};


chatSocket.onclose = function(e) {
  console.error('Chat socket closed unexpectedly');
};


useEffect(
  chatSocket.onopen = () => {
    chatSocket.send(JSON.stringify({message:'WebSocket connected'}))
  }
  ,[])