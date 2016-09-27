var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log('hello world')
})
app.get('/123', function (req, res) {
  res.send('Hello 666')
  console.log('hello 666')
})


app.listen(3000,function(){
  console.log('running on port 3000...please visit localhost:/3000');
})
