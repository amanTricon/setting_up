const express = require('express')
const app = express()
const port = 4000
require ('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Tricon',(req,res)=>{
    res.send('Hello Tricon!')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})