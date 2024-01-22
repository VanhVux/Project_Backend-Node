module.exports = function(app){
    var hoadonController = require('../controllers/hoadon.controller.js');
    //GET => http://localhost:3000/student
    app.get('/hoadon', hoadonController.getList)

    //http://localhost:3000/student/id
    app.get('/hoadon/:mahd', hoadonController.getById);


    //post nhan du lieu tu client gui len thong qua
    //phuong thuc post
    app.post('/hoadon', hoadonController.addNew);


    //put nhan du lieu tu client gui len thong qua
    //phuong thuc put
    app.put('/hoadon', hoadonController.update);


    //delete nhan du lieu tu client gui len thong qua
    //phuong thuc delete
    app.delete('/hoadon/:mahd', hoadonController.delete);
    }