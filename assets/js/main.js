"use strict";

const featuresBtn = document.querySelector(".feature--btn");
const overlay = document.querySelector(".overlay");
const transactType = document.querySelector("#transact-type");
const transferCard = document.querySelector(".transfer-card");
const depositCard = document.querySelector(".dep-card");
const withdrawCard = document.querySelector(".withdraw-card");
const accountModal = document.querySelector(".Accounts");
const closeAcct = document.querySelector(".closeAcct");
const transactModal = document.querySelector(".transactModal");
const closeTransact = document.querySelector(".closeTransact");
const closeAllTransact = document.querySelector(".closeAlltransact");
const allTransactModal = document.querySelector(".Alltransactions");
const closeAlltransfers = document.querySelector(".closeAlltransfers");
const allTransfersModal = document.querySelector(".Alltransfers");

//add feature btn events-event delegation
featuresBtn.addEventListener("click", function (e) {
  //console.log(e.target);
  e.preventDefault();

  const clicked = e.target.closest(".btn");
  // console.log(clicked.dataset.tab);

  if (!clicked) return;

  //console.log(clicked.dataset.tab);

  document
    .querySelector(`.f--${clicked.dataset.tab}`)
    .classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const hideOverlay = function () {
  overlay.classList.add("hidden");
};

const closeMe = function (modal, btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("hidden");
    hideOverlay();
  });
};

const closeByOverlay = function (modal) {
  overlay.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("hidden");
    hideOverlay();
  });
};
closeMe(accountModal, closeAcct);
closeMe(transactModal, closeTransact);
closeMe(allTransactModal, closeAllTransact);
closeMe(allTransfersModal, closeAlltransfers);

closeByOverlay(accountModal);
closeByOverlay(transactModal);
closeByOverlay(allTransactModal);
closeByOverlay(allTransfersModal);

transactType.addEventListener("change", function () {
  //switch between cards
  switch (transactType.value) {
    case "":
      transferCard.classList.add("hidden");
      depositCard.classList.add("hidden");
      withdrawCard.classList.add("hiddden");
      break;

    case "transfer":
      transferCard.classList.remove("hidden");
      depositCard.classList.add("hidden");
      withdrawCard.classList.add("hidden");
      break;

    case "deposit":
      transferCard.classList.add("hidden");
      depositCard.classList.remove("hidden");
      withdrawCard.classList.add("hidden");
      break;

    case "withdraw":
      transferCard.classList.add("hidden");
      depositCard.classList.add("hidden");
      withdrawCard.classList.remove("hidden");
      break;
  }
});
