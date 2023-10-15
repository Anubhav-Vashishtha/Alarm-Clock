let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

let a;
let sec;
let min;
let hour;

let pro1 = new Promise((resolve,reject)=>{
    setInterval(() => {
        a= new Date();
        sec=a.getSeconds();
        box5.innerHTML=`${sec}`;
        return resolve(3);
    },1000);
    
});
let pro2 = new Promise((resolve,reject)=>{
    setInterval(() => {
        a=new Date();
        hour=a.getHours();
        if(hour>=12){box1.innerHTML=`${hour-12}`}
        if(hour<12){box1.innerHTML=`${hour}`}
    },1000);
    
});
let pro3 = new Promise((resolve,reject)=>{
    setInterval(() => {
        a=new Date();
        min=a.getMinutes();
        box3.innerHTML=`${min}`;
        
    },1000);

});