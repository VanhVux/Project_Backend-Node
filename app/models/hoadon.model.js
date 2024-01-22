var {conn, sql} = require('../../connect');
module.exports = function(){
    this.getAll= async function(result){
        var pool = await conn;
        var sqlString = "SELECT * FROM HD ";
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

    this.getOne = async function(makh, result){
        var pool = await conn;
        var sqlString = "SELECT * FROM HD WHERE Mahd = @varMahd";
        return await pool.request()
        .input('varMahd',sql.Int, mahd)
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
        //INSERT INTO KH(Name, Email, Phone) VALUE(???)
        var pool = await conn;
        var sqlString = "INSERT INTO HD (Mahd, Makh, Manv, Tensp, Soluong) VALUES(@mahd,@makh,@manv,@tensp,@soluong)";
        return await pool.request()
        .input('mahd',sql.Int, newData.Mahd)
        .input('makh',sql.Int, newData.Makh)
        .input('manv',sql.Int, newData.Manv)
        .input('tensp',sql.NVarChar, newData.Tensp)
        .input('soluong',sql.Int, newData.Soluong)
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
        //UPDATE KH SET Name =?, Email =?, Phone =?
        var pool = await conn;
        var sqlString = "UPDATE HD SET Makh = @makh, Manv = @manv, Tensp = @tensp, Soluong = @soluong WHERE Mahd = @mahd";
        return await pool.request()
        .input('makh',sql.Int, newData.Makh)
        .input('manv',sql.Int, newData.Manv)
        .input('tensp',sql.NVarChar, newData.Tensp)
        .input('soluong',sql.Int, newData.Soluong)
        .input('mahd',sql.Int, newData.Mahd)
        .query(sqlString, function(err, data){
            if(err){
                result(true,null);
            }
            else{
                result(null, newData);
            }
        });
    }

    this.delete = async function(mahd, result){
        var pool = await conn;
        var sqlString = "DELETE FROM HD WHERE Mahd = @varMahd";
        return await pool.request()
        .input('varMahd',sql.Int, mahd)
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