
const http = require("http");
//Node.js自帶Http Module(模塊) 來進行導入 在字串中輸出http
const fs = require("fs");

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
        //另外console.log(requestUrl);
        //另外第四集 打印URL OBJECT 屬性
        //另外console.log(requestUrl.searchParams.get("lang"));
        //另外使用searchParams裡的方法Get取得Lang參數
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
        }else{
            sendRespone(`error404${selector}.html`, 404, response);
        }

    }else{

    }

});

//createServer函數會返回server object,於是將返回的server object 賦於一個constant(常數)，
//createServer第一個參數request object 獲取前端發來的請求信息，包含請求方法(GET,POST)，請求頭部訊息、內容等等，第二個參數為response object函數為即將要反饋給前端的信息。





server.listen(port,ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);
});




//在nodejs服務器加入三個HTML文件,服務器根據用戶想訪問的頁面讀取相對應的HTML文件，然後將這些HTML源代碼返回客戶端。
