"use strict";

{
  //-----------------
  // navメニュー
  //-----------------
  const menuItems = document.querySelectorAll(".js-nav__menu li a");
  const contents = document.querySelectorAll(".js-nav__content");

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener("click", e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove("active");
      });

      clickedItem.classList.add("active");

      contents.forEach(content => {
        content.classList.remove("active");
      });

      document.getElementById(clickedItem.dataset.id).classList.add("active");
    });
  });

  //-----------------
  // ドロップダウンメニュー
  //-----------------

  $(function() {
    $("ul.dropdownmenu__list li").hover(
      function() {
        // :not()は()で囲ったものじゃないものという意味、今回はanimationしている最中なもの以外を指定している
        // jQueryでDOMを取得する場合、第二引数を指定することで、「~の中にあるこのセレクタのDOM」というようにさらに絞り込むことができる
        $("ul.sub:not(:animated)", this).slideDown();
      },
      function() {
        $("ul.sub", this).slideUp();
      }
    );
  });

  //-----------------
  // モーダルウィンドウ
  //-----------------

  const modalOpen = document.querySelector(".js-modal__open");
  const modalMask = document.querySelector(".js-modal__mask");
  const modalWindow = document.querySelector(".js-modal__window");
  const modalClose = document.querySelector(".js-modal__close");

  // モーダル開くボタン押した時
  modalOpen.addEventListener("click", () => {
    modalMask.classList.remove("hidden");
    modalWindow.classList.remove("hidden");
  });

  // モーダル閉じるボタン押した時
  modalClose.addEventListener("click", () => {
    modalMask.classList.add("hidden");
    modalWindow.classList.add("hidden");
  });

  // マスク押した時
  modalMask.addEventListener("click", () => {
    modalClose.click();
  });
}
