const fs = require("fs");
const path = require("path");

var arg = process.argv[2];
var arg1 = process.argv[3];
switch(arg) {
    case "list" :
        list();
        break;
    case "mkdir" :
        mkdirFolder();
        break;
    default :
        console.log("请传入正确的参数");
        break;
}

var list = [];

function list() {
    list = [];
    var filePath = path.join(__dirname);
    var files = fs.readdirSync(filePath);
    for(var i = 0; i < files.length; i++) {
        var fileObj = {};
        var childPath = path.join(filePath, files[i]);
        var statObj = fs.statSync(childPath);
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        list.push(fileObj);
    }
    console.log(list);
}

function mkdirFolder() {
    fs.mkdir(arg1, function(err) {
        if(err){
            console.log('目录已存在');
        }else{
            console.log('创建成功');
        }
    });
}