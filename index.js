const express = require('express');

let app = express();
const port = 3000


app.listen(port, () => {
    console.log(`Local Server listening to port ${port}`)
})

app.get('/', (req,res)=>{
    res.json({'Message': 'Hello from local host'})
})

app.get('/greet', (req,res)=>{
    res.json({'Message': 'Happy New Year'})
})