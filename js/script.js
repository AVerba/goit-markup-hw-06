/*=====Добавляем отступ main от header======================================== */
const FilterBtn=document.querySelectorAll(".filter__btn");  
let hgHeader =document.querySelector(".header").offsetHeight;
let hgPage =document.querySelector(".page").style.paddingTop=`${hgHeader}px`;
/*   console.log(hgHeader); */
/*=====Открываем / закрываем модальоне окно на banner section================== */
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('_is-hidden');
    }
  })();

addFilterClass();


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
  

  


