'use strict';

{
  // モーダルウィンドウ
  const modalOpen = document.querySelector('.js-modal__open');
  const modalMask = document.querySelector('.js-modal__mask');
  const modalWindow = document.querySelector('.js-modal__window');
  const modalClose = document.querySelector('.js-modal__close');

  // モーダル開くボタン押した時
  modalOpen.addEventListener('click', () => {
    modalMask.classList.remove('hidden');
    modalWindow.classList.remove('hidden');
  });

  // モーダル閉じるボタン押した時
  modalClose.addEventListener('click', () => {
    modalMask.classList.add('hidden');
    modalWindow.classList.add('hidden');
  });

  // マスク押した時
  modalMask.addEventListener('click', () => {
    modalClose.click();
  });
}