const express = require('express')
const fs = require('fs')

const content = 'Some content!\n'



const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')

  var info = req.socket.remoteAddress + "#" + req.ip + "\n"
    fs.writeFile(__dirname + '/test.txt', info, { flag: 'a+' }, err => {
        if (err) {
        console.error(err)
        return
        }
        //file written successfully
    })
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname +"/test.txt")
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})