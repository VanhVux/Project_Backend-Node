var {conn, sql} = require('../../connect');
module.exports = function(){
    this.getAll= async function(result){
        var pool = await conn;
        var sqlString = "SELECT * FROM NV ";
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

    this.getOne = async function(manv, result) {
        var pool = await conn;
        var sqlString = "SELECT * FROM NV WHERE Manv = @manv"; // Corrected parameter name
        return await pool.request()
            .input('manv', sql.Int, manv) // Use the correct parameter name here
            .query(sqlString, function(err, data) {
                if (data.recordset.length > 0) {
                    result(null, data.recordset);
                } else {
                    result(true, null);
                }
            });
    };
    

    this.create = async function(newData, result){
        //console.log(req.body);
        //INSERT INTO KH(Name, Email, Phone) VALUE(???)
        var pool = await conn;
        var sqlString = "INSERT INTO NV (Manv, Tennv, Gioitinh, Quequan,Sdt) VALUES(@manv,@tennv,@gioitinh,@quequan,@sdt)";
        return await pool.request()
        .input('manv',sql.Int, newData.Manv)
        .input('tennv',sql.NVarChar, newData.Tennv)
        .input('gioitinh',sql.NVarChar, newData.Gioitinh)
        .input('quequan',sql.NVarChar, newData.Quequan)
        .input('sdt',sql.Int, newData.Sdt)
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
        var sqlString = "UPDATE NV SET Tennv = @tennv, Gioitinh = @gioitinh, Quequan = @quequan, Sdt = @sdt WHERE Manv = @manv";
        return await pool.request()
        .input('tennv',sql.NVarChar, newData.Tennv)
        .input('gioitinh',sql.NVarChar, newData.Gioitinh)
        .input('quequan',sql.NVarChar, newData.Quequan)
        .input('sdt',sql.Int, newData.Sdt)
        .input('manv',sql.Int, newData.Manv)
        .query(sqlString, function(err, data){
            if(err){
                result(true,null);
            }
            else{
                result(null, newData);
            }
        });
    }

    this.delete = async function(manv, result){
        var pool = await conn;
        var sqlString = "DELETE FROM NV WHERE Manv = @Manv";
        return await pool.request()
        .input('Manv',sql.Int, manv)
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