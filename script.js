const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('full-image');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = "block"; 
        modalImg.src = item.src;
        captionText.innerHTML = item.alt;
        document.body.classList.add('no-scroll'); 
    });
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});

function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll');
}
