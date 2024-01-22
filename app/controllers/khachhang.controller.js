var {conn, sql} = require('../../connect');
var Khachhang = require('../models/khachhang.model');
var model = new Khachhang();

exports.getList = async function(req, res){
    model.getAll(function(err, data){
        res.send({result: data, error: err});
    });
};

exports.getById = function(req, res){
    model.getOne(req.params.makh, function(err, data){
        res.send({result: data, error: err});
    });
}; 

exports.addNew = async function(req,res){
    //console.log(req.body);
    //INSERT INTO Student(Name, Email, Phone) VALUE(???)
    model.create(req.body, function(err, data){
        res.send({result: data, error: err});
    });
};

exports.update = function(req,res){
    //UPDATE Student SET Name =?, Email =?, Phone =?
    model.update(req.body, function(err, data){
        res.send({result: data, error: err});
    });
};

exports.delete= function(req,res){
    model.delete(req.params.makh, function(err, data){
        res.send({result: data, error: err});
    });
};