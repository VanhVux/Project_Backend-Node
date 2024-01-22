module.exports = function(app){
    var nhanvienController = require('../controllers/nhanvien.controller');
    //GET => http://localhost:3000/student
    app.get('/nhanvien', nhanvienController.getList)

    //http://localhost:3000/student/id
    app.get('/nhanvien/:manv', nhanvienController.getById);


    //post nhan du lieu tu client gui len thong qua
    //phuong thuc post
    app.post('/nhanvien', nhanvienController.addNew);


    //put nhan du lieu tu client gui len thong qua
    //phuong thuc put
    app.put('/nhanvien/:manv', nhanvienController.update);


    //delete nhan du lieu tu client gui len thong qua
    //phuong thuc delete
    app.delete('/nhanvien/:manv', nhanvienController.delete);
    }