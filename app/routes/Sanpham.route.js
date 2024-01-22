module.exports = function(app){
    var sanphamController = require('../controllers/sanpham.controller');
    //GET => http://localhost:3000/student
    app.get('/sanpham', sanphamController.getList)

    //http://localhost:3000/student/id
    app.get('/sanpham/:masp', sanphamController.getById);


    //post nhan du lieu tu client gui len thong qua
    //phuong thuc post
    app.post('/sanpham', sanphamController.addNew);


    //put nhan du lieu tu client gui len thong qua
    //phuong thuc put
    app.put('/sanpham/:masp', sanphamController.update);


    //delete nhan du lieu tu client gui len thong qua
    //phuong thuc delete
    app.delete('/sanpham/:masp', sanphamController.delete);
    }