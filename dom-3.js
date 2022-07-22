

// EVENTS 
var button = document.getElementById('button').addEventListener('click' , clickable);

function clickable(e){
//     console.log('you clicked');
     document.getElementById('header-title').textContent = 'Ramnath';
     document.querySelector('body').style.background = '#ddd';
//console.log(e.target);
//console.log(e.target.id);
//console.log(e.target.className);
//console.log(e.target.classList);
var output = document.getElementById('output');
output.innerHTML = '<h3>'+e.target.id+'</h3>';
document.getElementById('output').innerHTML = '<h3>'+e.target.id+'</h3>';

//console.log(e.type);

//console.log(e.clientX);
//console.log(e.clientY);
//console.log(e.offsetX);
//console.log(e.offsetY);
//console.log(e.altKey);
//console.log(e.ctrlKey);
//console.log(e.shiftKey);

}

//  MOUSE EVENTS

var button = document.getElementById('button');
//var box = document.getElementById('box');
//button.addEventListener('click' , runEvent);
//button.addEventListener('dblclick' , runEvent);
//button.addEventListener('mouseup' , runEvent);
//button.addEventListener('mousedown' , runEvent);
//box.addEventListener('mouseenter' , runEvent);
//box.addEventListener('mouseleave' , runEvent);
//box.addEventListener('mouseover' , runEvent);
//box.addEventListener('mouseout' , runEvent);

box.addEventListener('mousemove' , runEvent);

//  KEYBOARD EVENTS

var form = document.querySelector('form');
var select = document.querySelector('select');

//text.addEventListener('keydown' , runEvent );
//text.addEventListener('keyup' , runEvent );
//text.addEventListener('keypress' , runEvent );

//text.addEventListener('focus' , runEvent );
//text.addEventListener('blur' , runEvent );

//text.addEventListener('cut' , runEvent );
//text.addEventListener('paste' , runEvent );

//text.addEventListener('input' , runEvent );

//select.addEventListener('change' , runEvent);
//select.addEventListener('input' , runEvent);

form.addEventListener('submit' , runEvent)

function runEvent(e){
     console.log('EVENT TYPE :' +e.type);

     e.preventDefault();

//console.log(e.target.value);
document.getElementById('output').innerHTML = '<h3>' +e.target.value+ '</h3>';

     output.innerHTML = '<h3>MouseX: ' +e.offsetX+ '</h3><h3>MouseY: '+e.offsetY+ '</h3>';

     box.style.background = "rgb( 40 ,"+e.offsetX+", "+e.offsetY+" )";

     document.body.style.background = "rgb("+e.offsetX+" , "+e.offsetY+" , 40)";
}