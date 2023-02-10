var exp=document.getElementById("date");
var year=document.getElementById("year");
var days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,29,30,31]
var option="<option value='0'>01</option>";
var d= new Date();
var currentyear=d.getFullYear();
var str="<option value='0'>2023</option>";
for (let i of days){
    option +=`<option value="date">${i}</option>`;
    
};
exp.innerHTML=option;


for(let j=0;j<15;j++)
{
    str+=`<option value="year">${currentyear++}</option>`;
};
year.innerHTML=str;

let payment=document.getElementById("payment");
payment.addEventListener('click',()=>{
    let card = document.getElementById("card");
    card.style.display="block"
})
function hide(){
    let card = document.getElementById("card");
    card.style.display="none"
}
function validate(){
let debit = /^[6][\d]{3}[\s][\d]{4}[\s][\d]{4}[\s][\d]{4}$/
let validName=/^[A-Z]{1,35}/
let card_num=document.getElementById("number").value;
let name=document.getElementById("name").value.trim();


if(card_num.length==0 && name.length==0){
    alert("please fill the card and name details")
        return false;
        
    
    }
    else if(card_num.length==0 && name.length>0){
       alert("please fill the card number")
       return false;
       
     }

    else if(card_num.length>0 && name.length==0){
       alert("please fill the name")
        return false
      
      
     }
     else if(card_num.length>0 && name.length>0){
        if(debit.test(card_num)&&validName.test(name)){
           alert("success")
           return true
        }
        else{
            alert("please check card number again")
            return false
        }
       
       
}


}
