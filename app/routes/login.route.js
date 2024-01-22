module.exports = function(app){
    var loginController = require('../controllers/login.controller');
    //GET => http://localhost:3000/student
    app.get('/login', loginController.getList)

    //http://localhost:3000/student/id
    app.get('/login/:id', loginController.getById);


    //post nhan du lieu tu client gui len thong qua
    //phuong thuc post
    app.post('/login', loginController.addNew);


    //put nhan du lieu tu client gui len thong qua
    //phuong thuc put
    app.put('/login', loginController.update);


    //delete nhan du lieu tu client gui len thong qua
    //phuong thuc delete
    app.delete('/login/:id', loginController.delete);
    }