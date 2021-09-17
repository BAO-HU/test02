//Node.js自帶Http Module(模塊) 來進行導入 在字串中輸出http

const http = require("http");

const server = http.createServer((request,response) => {
    response.end("Hello From NodeJS Server")
});
//createServer函數會返回server object
//於是將返回的server object 賦於一個constant(常數)
//監聽器(Listener)= 函數(Function)
//從第一個參數request object 獲取前端發來的請求信息，包含請求方法(GET,POST)，請求頭部訊息、內容等等
//第二個參數為response object函數為即將要反饋給前端的信息

const port = 3000;
const ip ="127.0.0.1"; //此IP地址指向本機IP


server.listen(port,ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);
});


