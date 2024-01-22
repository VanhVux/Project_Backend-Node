var {conn, sql} = require('../../connect');
module.exports = function(){
    this.getAll= async function(result){
        var pool = await conn;
        var sqlString = "SELECT * FROM Nhacc ";
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

    this.getOne = async function(mancc, result){
        var pool = await conn;
        var sqlString = "SELECT * FROM Nhacc WHERE Mancc = @varMancc";
        return await pool.request()
        .input('varMancc',sql.Int, mancc)
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
        //INSERT INTO Nhacc(Name, Email, Phone) VALUE(???)
        var pool = await conn;
        var sqlString = "INSERT INTO Nhacc (Mancc, Tenncc, Masp, Sdt, Diachi) VALUES(@mancc,@tenncc,@masp,@sdt,@diachi)";
        return await pool.request()
        .input('mancc',sql.Int, newData.Mancc)
        .input('tenncc',sql.NVarChar, newData.Tenncc)
        .input('masp',sql.Int, newData.Masp)
        .input('sdt',sql.Int, newData.Sdt)
        .input('diachi',sql.NVarChar, newData.Diachi)
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
        //UPDATE Nhacc SET Name =?, Email =?, Phone =?
        var pool = await conn;
        var sqlString = "UPDATE Nhacc SET Tenncc = @tenncc, Masp = @masp, Sdt = @sdt, Diachi = @diachi WHERE Mancc = @mancc";
        return await pool.request()
        .input('tenncc',sql.NVarChar, newData.Tenncc)
        .input('masp',sql.Int, newData.Masp)
        .input('sdt',sql.Int, newData.Sdt)
        .input('diachi',sql.NVarChar, newData.Diachi)
        .input('mancc',sql.Int, newData.Mancc)
        .query(sqlString, function(err, data){
            if(err){
                result(true,null);
            }
            else{
                result(null, newData);
            }
        });
    }

    this.delete = async function(mancc, result){
        var pool = await conn;
        var sqlString = "DELETE FROM Nhacc WHERE Mancc = @varMancc";
        return await pool.request()
        .input('varMancc',sql.Int, mancc)
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