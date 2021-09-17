let age = 10;
console.log(`I am ${age} years old`);
//反引號用來遷入

console.log("I am" + age + "years old");


age = null;
//null值
let roomNumber;
console.log(roomNumber);
//未賦值undefined 不等於null

let id =Symbol();
//唯一的標示符



let user = {
    name: "John",
    age: 18,

};
console.log(user);
console.log(user.name);
//Object是javascript最重要的數據類型，存複雜數據
//通過添加對象屬性來添加數據，對象屬性是以成雙成對的形式出現，稱鍵值對(Key-value pair)

let balance01 = 0 ;
let newValue01 = balance01++;
console.log(newValue01);
console.log(balance01);
//賦於值時先後順序，先遞值在運算
let balance02 = 0 ;
let newValue02 = ++balance02;
console.log(newValue02);
console.log(balance02);
//賦於值時先後順序，先運算後在遞值

let x = 3 ;
let y = 1 + (x *= 3);
console.log(x);
console.log(y);
//與下相同 
//let x = 3;
//let y = 1 + (x *= 3);
//console.log(`x = ${x}, and y = ${y}`);
//(x *= 3)已將x重新賦值


let username;
let password;

if (username === "john@gmail.com" &&
    password === "j123"){
    console.log("John成功登陸");

    }else{

    }


let sales = [100, 50, 30, 60, 200, 300, 90];
let totalSales = 0;
for (let i = 0; i < sales.length; i++){       //sales第一個索引值是0 
    totalSales = totalSales + sales[i];
}
console.log(`讚, ${totalSales} `);
//array



function showMessage(username = "VIVI"){     //未提供參數則VIVI為默認值

    console.log(`Hi ${username}, Welcome`);

}
showMessage();
showMessage("John");
showMessage("Peko");
//function 





function showAlert() {
    alert("hey function!");

}
//___________________________________________________________
//---DOM屬性---缺點是一個元素只能有一個事件處理程序
let btn = document.getElementById("myButton"); //抓取HTML裡的ID="myButton"
//btn.onclick = showAlert ;  
//設定按鈕的ONclick屬性 showAlert後面不加()是因為還未需呼叫
//---DOM方式底---


//addEventListener 監聽器 用一個按鈕同時處理多個Click事件
function secondFunction(event){             //加入event參數，可以在函數裡訪問Event Object的屬性
    alert("hey second function!!");
    console.log(event);                     //此行列出Click 事件裡的屬性
}

btn.addEventListener("click", showAlert);
//建立監聽器，第一參數事件 第二處理事件的Function
btn,addEventListener("click",secondFunction);
//讓此物件監聽第二個Function事件
//btn.removeEventListener("click",showAlert); //用為刪除監聽事件

//_________________________________________________________
console.log("HELLO!");
console.log("WORLD");

function show2(){
    console.log(2);
}

console.log(1);
setTimeout(show2, 3000);
//setTimeout(回調函數,等待毫秒)，可在回掉函數中放function()
console.log(3);


//promise
const isPregnant = false;

const promise = new Promise( ( resolve, reject ) =>{
    if (isPregnant){
        resolve( `孩子他爹` );
    } else {
        reject( `老公` );
    }
});

promise
    .then( name =>{
        console.log(`男人成為了${name}!`);
    })
    .catch( name =>{
        console.log(`男人成為了${name}!`);
    })
    .finally( () => {
        console.log(`男人和女人最終結婚了!`);
    
    });

//promise

const imgAddress = "https://cdn2.ettoday.net/images/4636/d4636378.jpg"

const imgPromise = (url) =>{
    return new Promise ( (resolve, reject) =>{
        const img = new Image();
        img.src = url;
        img.onload = () =>{
            resolve( img );
        };
        img.onerror = () =>{
            reject( new Error("圖片有誤") );
        };

    });
};

imgPromise ( imgAddress )
    .then( img => {
            document.body.appendChild( img );
    })
    .catch( err =>{
        document.body.innerHTML = err ;
    }) ;



//箭頭函數



let chicken =["戰鬥機","小雞","KFC"];

let chicken_normal = chicken.map( function (item){
    return item += "哭啊";
});

let chicken_arrow = chicken.map( (item)  => {return item += "哭啊"});
//實際上如果只有一個參數 參數不須加刮號只有一個表達式可不加大括號 如下
//let chicken arrow = chicken.map(item => item += "哭啊");
console.log (chicken_normal);

//箭頭函數

function normal(){
    return () => arguments.length;
}

let arrow = normal(1,2,3);

console.log("今天吃了" + arrow() + "碗飯");

//面試 閉包 中高階
function books() {
    var book = "書包裡的書";
}
console.log(book);
//以上代碼是無法的


