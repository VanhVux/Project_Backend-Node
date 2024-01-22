module.exports = function(app){
    var khachhangController = require('../controllers/khachhang.controller');
    //GET => http://localhost:3000/student
    app.get('/khachhang', khachhangController.getList)

    //http://localhost:3000/student/id
    app.get('/khachhang/:makh', khachhangController.getById);


    //post nhan du lieu tu client gui len thong qua
    //phuong thuc post
    app.post('/khachhang', khachhangController.addNew);


    //put nhan du lieu tu client gui len thong qua
    //phuong thuc put
    app.put('/khachhang/:makh', khachhangController.update);


    //delete nhan du lieu tu client gui len thong qua
    //phuong thuc delete
    app.delete('/khachhang/:makh', khachhangController.delete);
    }