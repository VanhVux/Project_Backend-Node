var {conn, sql} = require('../../connect');
module.exports = function(){
    this.getAll= async function(result){
        var pool = await conn;
        var sqlString = "SELECT * FROM KH ";
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

    this.getOne = async function(makh, result) {
        var pool = await conn;
        var sqlString = "SELECT * FROM KH WHERE Makh = @makh"; // Corrected parameter name
        return await pool.request()
            .input('makh', sql.Int, makh) // Use the correct parameter name here
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
        var sqlString = "INSERT INTO KH (Makh, Tenkh, Sdt, Diachi) VALUES(@makh,@tenkh,@sdt,@diachi)";
        return await pool.request()
        .input('makh',sql.Int, newData.Makh)
        .input('tenkh',sql.NVarChar, newData.Tenkh)
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
        //UPDATE KH SET Name =?, Email =?, Phone =?
        var pool = await conn;
        var sqlString = "UPDATE KH SET Tenkh = @tenkh, Sdt = @sdt, Diachi = @diachi WHERE Makh = @makh";
        return await pool.request()
        .input('Tenkh',sql.VarChar, newData.Tenkh)
        .input('Sdt',sql.Int, newData.Sdt)
        .input('Diachi',sql.VarChar, newData.Diachi)
        .input('Makh',sql.Int, newData.Makh)
        .query(sqlString, function(err, data){
            if(err){
                result(true,null);
            }
            else{
                result(null, newData);
            }
        });
    }

    this.delete = async function(Makh, result){
        var pool = await conn;
        var sqlString = "DELETE FROM KH WHERE Makh = @Makh";
        return await pool.request()
        .input('Makh',sql.Int, Makh)
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