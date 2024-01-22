var {conn, sql} = require('../../connect');
module.exports = function(){
    this.getAll= async function(result){
        var pool = await conn;
        var sqlString = "SELECT * FROM Sanpham ";
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

    this.getOne = async function(masp, result) {
        var pool = await conn;
        var sqlString = "SELECT * FROM Sanpham WHERE Masp = @masp"; // Corrected parameter name
        return await pool.request()
            .input('masp', sql.Int, masp) // Use the correct parameter name here
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
        //INSERT INTO Sanpham(Name, Email, Phone) VALUE(???)
        var pool = await conn;
        var sqlString = "INSERT INTO Sanpham (Masp, Tensp) VALUES(@masp,@tensp)";
        return await pool.request()
        .input('masp',sql.Int, newData.Masp)
        .input('tensp',sql.NVarChar, newData.Tensp)
        .input('mausac',sql.NVarChar, newData.Mausac)
        .input('size',sql.NVarChar, newData.Size)
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
        //UPDATE Sanpham SET Name =?, Email =?, Phone =?
        var pool = await conn;
        var sqlString = "UPDATE Sanpham SET Tensp = @tensp WHERE Masp = @masp";
        return await pool.request()
        .input('tensp',sql.NVarChar, newData.Tensp)
        .input('mausac',sql.NVarChar, newData.Mausac)
        .input('size',sql.NVarChar, newData.Size)
        .input('masp',sql.Int, newData.Masp)
        .query(sqlString, function(err, data){
            if(err){
                result(true,null);
            }
            else{
                result(null, newData);
            }
        });
    }

    this.delete = async function(masp, result){
        var pool = await conn;
        var sqlString = "DELETE FROM Sanpham WHERE Masp = @varMasp";
        return await pool.request()
        .input('varMasp',sql.Int, masp)
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