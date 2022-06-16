//using selectors inside the element
// traversing the DOM

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        btns.forEach(function (item) {
            if (item.parentElement.parentElement.classList.contains('show-text'));
            item.parentElement.parentElement.classList.remove('show-text');
        })
        e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
    })
})