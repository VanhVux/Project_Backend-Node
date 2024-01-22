var express = require('express')

var app = express();

var bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:8080', // Set the allowed origin here
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(bodyParser.json());

//cac router
app.get('', function(req, res){
    res.send('<h1>NodeJS App</h1>');
})

require('./app/routes/student.route')(app);
require('./app/routes/Sanpham.route')(app);
require('./app/routes/Khachhang.route')(app);
require('./app/routes/Nhacc.route')(app);
require('./app/routes/Nhanvien.route')(app);
require('./app/routes/Hoadon.route')(app);
require('./app/routes/login.route')(app);
//require('./app/routes/user.route')(app);

//mo cong server
app.listen(3000, function(){
    console.log("running: http://localhost:3000")
});
