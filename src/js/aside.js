let menuOpen = document.querySelector('.icon-burger');
let menuClose = document.querySelector('.head__icon--close')
let aside = document.querySelector('.aside')
let header = document.querySelector('header')
let main = document.querySelector('main')
menuOpen.addEventListener('click', function(){
  aside.classList.add('aside--show');
  header.style.opacity = 0.1;
  main.style.opacity = 0.1;
})
menuClose.addEventListener('click', function(){
  aside.classList.remove('aside--show');
  header.style.opacity = 1;
  main.style.opacity = 1;
})
main.addEventListener('click', function(){
  aside.classList.remove('aside--show');
  header.style.opacity = 1;
  main.style.opacity = 1;
})

let modalCallOpen = document.querySelectorAll('.icon-call');
let modalChatOpen = document.querySelectorAll('.icon-chat');
let modalFeedback = document.querySelector('.modal-feedback');
let modalCall = document.querySelector('.modal-call');
let modalButtonClose = document.querySelectorAll('.modal-button');

for(let i = 0; i < modalCallOpen.length; i++) {
  modalCallOpen[i].addEventListener('click', function(){
    modalCall.classList.add('call--show');
    header.style.opacity = 0.1;
    main.style.opacity = 0.1;
    aside.style.opacity = 0;
  })
}
for(let i = 0; i < modalButtonClose.length; i++) {
  modalButtonClose[i].addEventListener('click', function(){
    modalCall.classList.remove('call--show');
    modalFeedback.classList.remove('feedback--show');
    aside.classList.remove('aside--show');
    header.style.opacity = 1;
    main.style.opacity = 1;
    aside.style.opacity = 1;
  })
}


for(let i = 0; i < modalChatOpen.length; i++) {
  modalChatOpen[i].addEventListener('click', function(){
    modalFeedback.classList.add('feedback--show');
    header.style.opacity = 0.1;
    main.style.opacity = 0.1;
    aside.style.opacity = 0;
  })
}
main.addEventListener('click', function(){
  modalFeedback.classList.remove('feedback--show');
  header.style.opacity = 1;
  main.style.opacity = 1;
  aside.style.opacity = 1;
})
main.addEventListener('click', function(){
  modalCall.classList.remove('call--show');
  header.style.opacity = 1;
  main.style.opacity = 1;
  aside.style.opacity = 1;
})


