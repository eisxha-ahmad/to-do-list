const image= document.getElementById("bear");
const newSource = 'list-images/bear-flwr.jpg';
const originalSource = 'list-images/bear.jpg';
const bearLeft = document.getElementById("left2");
const leftOrg ='list-images/left-removebg-preview.png';
const leftNew = 'list-images/another.png';


image.addEventListener('mouseover', event=>{
    image.src = newSource;
})
image.addEventListener('mouseout',event=>{
    image.src = originalSource;
})



const listContainer = document.getElementById("list-container");
const input = document.getElementById("tasks");
const add = document.getElementById("add");

function addTask(){
    if(input.value ===''){
        alert("you must write something!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    
        bearLeft.src = leftNew;
        setTimeout(() => {
            bearLeft.src = leftOrg;
        }, 1000);
       
    }
    input.value='';
    saveData();
    



}
listContainer.addEventListener('click', function(e){
    if( e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if( e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    }
)
function saveData (){
     localStorage.setItem("data", listContainer.innerHTML);
}
function display (){
    listContainer.innerHTML = localStorage.getItem("data");

}
display();




