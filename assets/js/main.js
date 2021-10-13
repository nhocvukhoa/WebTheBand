const buyBtns = document.querySelectorAll('.place-buy-btn');
const modal = document.querySelector('.modal');
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function() {
        modal.classList.add('open');
    });
}

const modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', function() {
    modal.classList.remove('open');
});

modal.addEventListener('click', function() {
    modal.classList.remove('open');
})
const modalContainer = document.querySelector('.modal-container');
modalContainer.addEventListener('click', function(even) {
    even.stopPropagation();
});