module.exports = function(app){
    var nhacungcapController = require('../controllers/nhacc.controller');
    //GET => http://localhost:3000/student
    app.get('/nhacungcap', nhacungcapController.getList)

    //http://localhost:3000/nhacungcap/id
    app.get('/nhacungcap/:mancc', nhacungcapController.getById);


    //post nhan du lieu tu client gui len thong qua
    //phuong thuc post
    app.post('/nhacungcap', nhacungcapController.addNew);


    //put nhan du lieu tu client gui len thong qua
    //phuong thuc put
    app.put('/nhacungcap', nhacungcapController.update);


    //delete nhan du lieu tu client gui len thong qua
    //phuong thuc delete
    app.delete('/nhacungcap/:mancc', nhacungcapController.delete);
    }