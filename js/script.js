const FilterBtn=document.querySelectorAll(".filter__btn"),
      openModalBtn = document.querySelector("[data-modal-open]"),
      closeModalBtn = document.querySelector("[data-modal-close]"),
      modal = document.querySelector("[data-modal]") 

/*=====Добавляем отступ main от header======================================== */
let hgHeader =document.querySelector(".header").offsetHeight,
    hgPage =document.querySelector(".page").style.paddingTop=`${hgHeader}px`;


addFilterClass();
/*=====Открываем / закрываем модальоне окно на banner section================== */
openModalBtn.addEventListener('click', ()=>{
  modal.classList.remove("_is-hidden")
}, false);

closeModalBtn.addEventListener('click',()=>{
  modal.classList.add("_is-hidden")
  
}, false);



function addFilterClass(){ 
 FilterBtn.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    removeFilterClass()
      btn.classList.add("active")
    })
  })
}
function removeFilterClass(){
  FilterBtn.forEach((btn)=>{
    btn.classList.remove("active")
  })
}
  

  


