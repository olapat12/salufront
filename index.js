const express = require('express');
const app = express();
const userRoute = require('./user')
const cors = require('cors')


app.use(express.json());
app.use(cors())

const PORT = process.env.PORT 

// const PORT = 4000

app.use('/user', userRoute);

app.get('/hello', (req, res)=>{

    res.send('hello world')
})



app.listen(PORT, ()=> console.log('running'))