module.exports = function(app){
    var studentController = require('../controllers/student.controller');
    //GET => http://localhost:3000/student
    app.get('/student', studentController.getList)

    //http://localhost:3000/student/id
    app.get('/student/:id', studentController.getById);


    //post nhan du lieu tu client gui len thong qua
    //phuong thuc post
    app.post('/student', studentController.addNew);


    //put nhan du lieu tu client gui len thong qua
    //phuong thuc put
    app.put('/student', studentController.update);


    //delete nhan du lieu tu client gui len thong qua
    //phuong thuc delete
    app.delete('/student/:id', studentController.delete);
    }