var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mysql = require("./test.js");
const URL=require('url');
const querystring=require('querystring');
const parseURL=(url)=>{
  return querystring.parse(URL.parse(url).query);
}

// 注册users接口
var users = require('./routes/users');
app.use('/users', users);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));

// 访问单页
app.get('/', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
  res.send(html);
});
app.get('/tjvideogo',(req,res)=>{
  let para=parseURL(req.url);
  // console.log(para)
  let video1=fs.readFileSync("../client/assets/mp4s/go/go"+para.index+".mp4");
  videoGo1=new Buffer(video1,"binary");
  res.setHeader("Content-Type","video/mp4");
  res.end(videoGo1);
});
app.get('/tjvideofabric',(req,res)=>{
  let para=parseURL(req.url);
  // console.log(para)
  let video1=fs.readFileSync("../client/assets/mp4s/fabric/fabric"+para.index+".mp4");
  videoGo1=new Buffer(video1,"binary");
  res.setHeader("Content-Type","video/mp4");
  res.end(videoGo1);
});
app.post('/login',(req,res)=>{
  var  sql = 'SELECT count(*) FROM user_list WHERE uname="'+req.body.name+'" AND upwd="'+req.body.password+'"';
  mysql.query(sql, function(err,result){
      // console.log(sql,result);
      res.json(err?err:result)
  })
});
// 监听
app.listen(3020, function () {
  console.log('success listen...3020');
});