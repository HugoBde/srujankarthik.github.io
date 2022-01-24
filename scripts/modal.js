const closeModalButton = document.querySelector('[data-modal-close]');
const overlay = document.getElementById('overlay');

closeModalButton.addEventListener('click', () => {
    const modal = closeModalButton.closest('.modal');
    closeModal(modal);
});

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.add('inactive');
    overlay.classList.remove('active');
}