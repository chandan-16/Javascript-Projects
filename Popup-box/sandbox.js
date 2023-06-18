const button = document.querySelector('.delete-button-top');
const popup = document.querySelector('.popup-wrapper');
const insideDelete = document.querySelector('.inside-delete')
const cancelBtn = document.querySelector('.cancel-btn');

button.addEventListener('click', ()=> {
    popup.style.display = "block";
});

insideDelete.addEventListener('click', () => {
    popup.style.display = "none";
});

cancelBtn.addEventListener('click', () => {
    popup.style.display = "none";
});


































