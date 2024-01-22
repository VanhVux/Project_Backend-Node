var {conn, sql} = require('../../connect');
module.exports = function(){
    this.getAll= async function(result){
        var pool = await conn;
        var sqlString = "SELECT * FROM login ";
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
        var sqlString = "SELECT * FROM login WHERE id = @varid";
        return await pool.request()
        .input('varid',sql.Int, id)
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
        var sqlString = "INSERT INTO login (id,username,password) VALUES(@id,@username,@password)";
        return await pool.request()
        .input('id',sql.Int, newData.id)
        .input('username',sql.NVarChar, newData.username)
        .input('password',sql.NVarChar, newData.password)
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
        var sqlString = "UPDATE login SET username = @username, password = @password WHERE id = @id";
        return await pool.request()
        .input('username',sql.NVarChar, newData.username)
        .input('password',sql.NVarChar, newData.password)
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
        var sqlString = "DELETE FROM login WHERE id = @varid";
        return await pool.request()
        .input('varid',sql.Int, id)
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