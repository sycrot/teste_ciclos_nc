
let html =  '<button class="form__buttonProx">>Próxima</button>'
let formList = document.querySelector(".form__list_questions");
let formQuestions = document.querySelectorAll(".form__question")
let btnPrev = document.querySelector('.form__buttonPrev')
let btnNext = document.querySelector('.form__buttonProx')

var current = 0;

init()
function init() {
    var show = formList.querySelectorAll('.show')

    Array.prototype.forEach.call(show, function(s) {
        s.classList.remove('show')
    })
    formQuestions[0].classList.add('show')
    btnPrev.removeAttribute('style')
    btnNext.removeAttribute('style')

    addListeners()
}

function addListeners() {
    btnNext.addEventListener('click', showNext)
    btnPrev.addEventListener('click', showPrev)
}

function showNext() {
    current++
    showSlide()
}
function showPrev() {
    current--
    showSlide()
}

function showSlide() {
    let qtd = formQuestions.length
    var slide = current % qtd
    slide = Math.abs(slide)

    formList.querySelector('.show').classList.remove('show')
    formQuestions[slide].classList.add('show')
}


/* for (let i = 0; i < formQuestion.length; i++) {
    let button = formQuestion[i].querySelector('.form__buttonProx')
    formQuestion[i].classList.add('.show')
    button.addEventListener('click', () => {
        formQuestion[i].classList
    })
} */
