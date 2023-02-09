const formEl=document.querySelector(".form");

const inputEl=document.querySelector(".input");
const ulEl=document.querySelector(".list");

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    toDoList()
});

function toDoList(){
    let newTask = inputEl.value;
    const liEl=document.createElement("li");
    liEl.innerText=newTask;
    ulEl.appendChild(liEl);
    inputEl.value=""
    const checkBtnEl=document.createElement("div")
    checkBtnEl.innerHTML=`<i class="fa-solid fa-square-check">`;
    liEl.appendChild(checkBtnEl)
    const trashBtnEl=document.createElement("div")
    trashBtnEl.innerHTML=`<i class="fa-sharp fa-solid fa-trash"></i>`;
    liEl.appendChild(trashBtnEl)

    checkBtnEl.addEventListener("click",()=>{
        liEl.classList.toggle("checked");
    
    });

    trashBtnEl.addEventListener('click',()=>{
        liEl.remove()
    })

}





let arr=[1,2,3]
let arr1=[2,4,5]
