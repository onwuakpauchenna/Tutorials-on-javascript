'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal');
console.log(btnopenmodal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnopenmodal.length; i++)
  btnopenmodal[i].addEventListener('click', openModal);

btnclosemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
