(function(){
    let formList = document.querySelector(".form__list_questions");
    let formQuestions = document.querySelectorAll(".form__question")
    let checkboxAnswers = document.getElementsByName('question4');
    var current = 0;
    let checks = 0
    let arr = []
    checkboxAnswers.forEach(e => {
        e.addEventListener('click', () => {
            arr.push(e)
            arr.length = 2
            if (e.checked) { 
                checks++ 
            } else { 
                checks-- 
            }
            if (checks > 2) {
                e.checked = false
                checks = 2
                arr[checks].checked = false
            }
            console.log(checks)
        })
    })

    let btnPrev = document.querySelector('.form__buttonPrev')
    let btnNext = document.querySelector('.form__buttonProx')
    init()
    function init() {
        var show = formList.querySelectorAll('.show')

        Array.prototype.forEach.call(show, function(s) {
            s.classList.remove('show')
        })
        formQuestions[0].classList.add('show')
        btnPrev.removeAttribute('style')
        btnNext.removeAttribute('style')

        if (formQuestions[0]) {
            btnPrev.setAttribute('style', 'display: none;')
        } else {
            btnPrev.removeAttribute('style')
        }

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

        if (formQuestions[slide] == formQuestions[0]) {
            btnPrev.setAttribute('style', 'display: none;')
        } else {
            btnPrev.removeAttribute('style')
        }
        if (formQuestions[slide] == formQuestions[qtd-=1]) {
            btnNext.setAttribute('style', 'display: none;')
        } else {
            btnNext.removeAttribute('style')
        }
        formList.querySelector('.show').classList.remove('show')
        formQuestions[slide].classList.add('show')
    }
})()

