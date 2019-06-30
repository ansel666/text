let path = require("path")
__dirname //绝对路径
console.log(__dirname);
let r = path.resolve(__dirname,"app.js"); //了解resolve  可以多拼接一层 /a
let r1 = path.resolve(__dirname,"app.js")
console.log(r);  //\Visual Studio Cod 练习\Node\app.js