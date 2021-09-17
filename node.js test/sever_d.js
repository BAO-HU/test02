
const http = require("http");
//Node.js自帶Http Module(模塊) 來進行導入 在字串中輸出http
const fs = require("fs");
const qs = require("querystring"); //導入querystring模塊，內有函數用來拆解回傳字串

const port = 3000;
const ip ="127.0.0.1"; //此IP地址指向本機IP

const sendRespone = (filename,statusCode,response) =>{
    fs.readFile(`./${filename}`,(error,data) =>{
        if(error){
            response.statusCode = 500;
            response.setHeader("Content-Type","text/plain");
            response.end("Sorry,internal error");
        }else{
            response.statusCode = statusCode;
            response.setHeader("Content-Type","text/html");
            response.end(data);
        }

    });
};
//fs.readFile裡面的if else判斷readFile是否讀取文件，一般Node.js會先判斷程序有無報錯，如果readFile出現錯誤就能被優先處理，並將狀態馬設置為500回報簡短訊息，為避免暴露過多伺服器訊息
//setHeader來告訴瀏覽器返回的訊息格式，而Sorry...error為文本。
const server = http.createServer((request,response) => {    
 
      
    
    const method = request.method;
    let url = request.url;

    if (method === "GET") {

        const requestUrl = new URL(url, `http://${ip}:${port}`);
        url = requestUrl.pathname;
        const lang = requestUrl.searchParams.get("lang");
        let selector;

        if (lang === null || lang === "en"){
            selector = "";  
        } else if(lang === "zh"){
            selector = "_zh";
        }else{
            selector = "";
        }


        if(url === "/"){
            sendRespone(`index${selector}.html`, 200, response);
        }else if (url === "/about.html"){
            sendRespone(`about${selector}.html`, 200, response); 
        }else if (url === "/login.html"){
            sendRespone(`login${selector}.html`, 200, response); 
        }else if (url === "/login-success.html"){
            sendRespone(`login-success${selector}.html`, 200, response); 
             }else if (url === "/login-fail.html"){
            sendRespone(`login-fail${selector}.html`, 200, response); 
        }else{
            sendRespone(`error404${selector}.html`, 404, response);
        }

    }else{
     if(url === "/process-login"){
         let body = [];

         request.on("data", (chunk) => {
            body.push(chunk);
         });

         request.on("end", () => {
             body = Buffer.concat(body).toString(); //來將Buffer類型數據轉成字符串，username=aaa&password=111
             body = qs.parse(body); //拆解Buffer類型數據轉成字符串後的字串分解整理，{ username: 'aaa', password: '111' }。
             console.log(body);

             if (body.username === "john" && body.password === "john123") {
                response.statusCode = 301;
                response.setHeader("Location","/login-success.html");
             }else{
                response.statusCode = 301;
                response.setHeader("Location","/login-fail.html");

             }

             response.end();
         });

        }
    }
});
//程序目前只接受兩種請求法 GET POST 用if else來做判斷 if為GET else用為POST
//POST確認請求路徑 判斷URL = /process-login





server.listen(port,ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);
});




//在nodejs服務器加入三個HTML文件,服務器根據用戶想訪問的頁面讀取相對應的HTML文件，然後將這些HTML源代碼返回客戶端。
