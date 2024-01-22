var {conn, sql} = require('../../connect');
module.exports = function(){
    this.getAll= async function(result){
        var pool = await conn;
        var sqlString = "SELECT * FROM Student ";
        return await pool.request()
        .query(sqlString, function(err, data){
            if(data.recordset.length >0){
                result(null, data.recordset);
            }
            else{
                result(true, null)
            }
        });
    }

    this.getOne = async function(id, result){
        var pool = await conn;
        var sqlString = "SELECT * FROM Student WHERE Id = @varId";
        return await pool.request()
        .input('varId',sql.Int, id)
        .query(sqlString, function(err, data){
            if(data.recordset.length >0){
                result(null, data.recordset);
            }
            else{
                result(true, null)
            }
        });
    }

    this.create = async function(newData, result){
        //console.log(req.body);
        //INSERT INTO Student(Name, Email, Phone) VALUE(???)
        var pool = await conn;
        var sqlString = "INSERT INTO Student (Id,Name, Email, Phone) VALUES(@id,@name,@email,@phone)";
        return await pool.request()
        .input('id',sql.Int, newData.Id)
        .input('name',sql.NVarChar, newData.Name)
        .input('email',sql.NVarChar, newData.Email)
        .input('phone',sql.NVarChar, newData.Phone)
        .query(sqlString, function(err, data){
            //console.log(err);
            if(err){
                result(true,null);
            }
            else{
                result(null, newData);
            }
        });
    }

    this.update = async function(newData, result){
        //UPDATE Student SET Name =?, Email =?, Phone =?
        var pool = await conn;
        var sqlString = "UPDATE Student SET Name = @name, Email = @email, Phone = @phone WHERE Id = @id";
        return await pool.request()
        .input('name',sql.NVarChar, newData.Name)
        .input('email',sql.NVarChar, newData.Email)
        .input('phone',sql.NVarChar, newData.Phone)
        .input('id',sql.Int, newData.Id)
        .query(sqlString, function(err, data){
            if(err){
                result(true,null);
            }
            else{
                result(null, newData);
            }
        });
    }

    this.delete = async function(id, result){
        var pool = await conn;
        var sqlString = "DELETE FROM Student WHERE Id = @varId";
        return await pool.request()
        .input('varId',sql.Int, id)
        .query(sqlString, function(err, data){
            if(err){
                result(true,null);
            }
            else{
                result(null, data);
            }
        });
    }
}