/*=====Добавляем отступ main от header======================================== */
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

  


