var addToDo = document.querySelector('#addToDo');
var clearToDo = document.querySelector('#clearToDo');
var inputText = document.querySelector('#inputText');
var toDoContainer = document.querySelector('#toDoContainer');



addToDo.addEventListener("click", function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click',function(){

         paragraph.style.textDecoration= 'line-through';
    })

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);

    })
    clearToDo.addEventListener('click',function(){
        paragraph.remove();

    }
    )



})
