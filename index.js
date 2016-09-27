var express = require('express')
var app = express()

// app.get('/', function (req, res) {
//   var page = "<html>" +
//              "<body>" +
//                "<h1>Index.html</h1>" +
//              "</body>" +
//             "</html>"
//   res.send(page)
//   // res.send('Hello World')
//   console.log('hello world')
// })
app.get('/:name', function (req, res) {

  var username=req.params.name
  var page = "<html>" +
             "<body>" +
               "<h1>" +
               username+"的购物车"+
               "</h1>" +
             "</body>" +
            "</html>"
  res.send(page)
  // res.send('Hello 666')
  console.log('hello 666')
})


app.listen(3000,function(){
  console.log('running on port 3000...please visit localhost:/3000');
})
