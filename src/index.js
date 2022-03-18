import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// === CONTACT MODAL MOBILE VERSION === //
const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);

  if (openBtn && modalContainer) {
    openBtn.addEventListener('click', () => {
      modalContainer.classList.add('show-modal');
    });
  }
};
showModal('contact', 'modal-container');

const closeBtn = document.querySelectorAll('.close-modal');

function closeModal() {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.classList.remove('show-modal');
}
closeBtn.forEach((c) => c.addEventListener('click', closeModal));

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('show-modal')) {
    closeModal();
  }
});
// END //

// ========== PORTFOLIO MODAL ========== //
const portoViews = document.querySelectorAll('.porto-modal');
const portoBtn = document.querySelectorAll('.porto-modal-btn');
const portoClose = document.querySelectorAll('.porto-modal-close');
// const pageBody = document.getElementById('body');

let modal = function(modalClick) {
  portoViews[modalClick].classList.add('active-modal');
  // pageBody.classList.add('active-modal');
};

portoBtn.forEach((pb, i) => {
  pb.addEventListener('click', () => {
    modal(i);
  });
});

portoClose.forEach((pc) => {
  pc.addEventListener('click', () => {
    portoViews.forEach((pv) => {
      pv.classList.remove('active-modal');
      // pageBody.classList.remove('active-modal');
    });
  });
});

// Remove porto-modal when user clicking outside of it
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('active-modal')) {
    portoViews.forEach((pv) => {
      pv.classList.remove('active-modal');
      // pageBody.classList.remove('active-modal');
    });
  }
});
// ====== END ====== //

// =============== ACCORDION FAQ =============== //
const accordionItems = document.querySelectorAll('.faq-text li');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.question-arrow');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.showAnswer');
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.faq-text li p');
  if (item.classList.contains('showAnswer')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('showAnswer');
  } else {
    item.classList.add('showAnswer');
  }
};
// ====== ACCORDION END ====== //
