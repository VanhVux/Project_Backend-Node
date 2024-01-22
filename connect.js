var sql = require('mssql/msnodesqlv8');

//cac thong tin ket noi 
var config = {
    server: "localhost",
    user: "sa",
    password:"vanh",
    database: "datafornode",
    driver: "msnodesqlv8"
};

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});


//xuat ra duoi dang module gom 2 thuoc tinh la conn va sql
module.exports = {
    conn: conn,
    sql: sql
}