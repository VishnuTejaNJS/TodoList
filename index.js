document.getElementById('btn').addEventListener('click'
function(){
    let input = document.getElementById('input').value;

    // Creating the todo list elements
    let elem=document.createElement('li');
    let btn1=document.createElement('button');
    let btn2=document.createElement('button');
    btn1.innerText="Done";
    btn2.innerText="Delete";
    let ul=document.querySelector('ul');

    // Appending the elements with HTML elements
    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2);
}
);