const PLINK = document.querySelector('#pLink');
const PLINK2 = document.querySelector('#pLink2');
const WRAPPER = document.querySelector('#wrapper');
const WRAPPER2 = document.querySelector('#wrapper2');
        function doMove(e){
     var horizontalPosition = 155- e.clientX;
    var verticalPosition= 435- e.clientY;
   PLINK.style.left= horizontalPosition+'px';
   PLINK.style.top= verticalPosition+'px';
    console.log('working')};
     
 function doMove2(e){
     var horizontalPosition =350- e.clientX;
    var verticalPosition= 570- e.clientY;
   PLINK2.style.left= horizontalPosition+'px';
   PLINK2.style.top= verticalPosition+'px';
    console.log('working2')};


WRAPPER.addEventListener('mousemove',doMove);
     WRAPPER2.addEventListener('mousemove',doMove2);
