var {conn, sql} = require('../../connect');
var Sanpham = require('../models/sanpham.model');
var model = new Sanpham();

exports.getList = async function(req, res){
    model.getAll(function(err, data){
        res.send({result: data, error: err});
    });
};

exports.getById = function(req, res){
    model.getOne(req.params.masp, function(err, data){
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
    model.delete(req.params.masp, function(err, data){
        res.send({result: data, error: err});
    });
};