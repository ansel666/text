let url = require("url")
let str = "http://www.abc.com/user?name=1&age=3"; //定义了一个地址
let result = url.parse(str,true);
//url.parse 加true 的属性，把查询字符串转化为对象
console.log(result)
// protocol: 'http:' 表示协议
//host 域名 带端口号的
// hostname: 'www.abc.com', 域名
//search: '?name=1'  带?的查询参数
//query 不带问号的查询参数  √
//pathname  访问的路径    √