let fs = require("fs");
let path = require("path")
let fsPromise = fs.promises;
let filename = path.resolve(__dirname,"good.json")
fsPromise.readFile(filename,"utf-8").then(data=>{
    data=JSON.parse(data) //good数组
    //data = [{id:1,name:"苹果"},{id:2,name:"橘子"}]
    let newary = data.map(item=>{
        if(item.id===1){
            item.name = "香蕉";
        }
        return item
    });
    fsPromise.writeFile(path.join(__dirname,'good.json'),JSON.stringify(newary),'utf-8');
})