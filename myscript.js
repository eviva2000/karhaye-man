
let buble=document.querySelector('#buble');
let image=document.querySelector('.image');
setTimeout( function(){
    document.getElementById('buble').style.display='block';
   buble.classList.add('buble-pop');
    console.log('i m working');
    
    
},1000);

image.addEventListener('click', doThis);

function doThis(){
    console.log('AM I WORKING?');
    
    
}