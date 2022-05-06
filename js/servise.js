const formComment = document.querySelector('.comments__form');
const commentBtn = document.querySelector('.comments__card-btn').addEventListener('click', () =>{
    formComment.classList.toggle('active');
    window.scrollTo('pageYOffset', 800)
});