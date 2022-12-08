'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpen = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');
//using loop 

for (let i = 0; i < btnOpen.length; i++){
   const openModel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
   };
   const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
   };
    btnOpen[i].addEventListener('click', openModel);
    btnClose.addEventListener('click', closeModel);
    overlay.addEventListener('click', closeModel);

    //when esc btn press to close 
    document.addEventListener('keydown', function(e){
    console.log(e.key); //use key to display key

   if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModel();
   }
});
};




