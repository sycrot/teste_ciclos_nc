(function(){
    Ligthbox()
    CheckboxConfiguration()
    parallax()

    function parallax() {
        let desktop = window.matchMedia('(min-width: 1024px)')
        let classes = document.querySelectorAll('.rellax')
        
        function P(x) {
            if(!x.matches) {
                classes.forEach(e => {
                    e.classList.remove('rellax')
                })
            } else {
                classes.forEach(e => {
                    e.classList.add('rellax')
                })
            }
        }

        P(desktop)
        desktop.addListener(P)
    }

    function CheckboxConfiguration() {
        let checkboxAnswers = document.getElementsByName('question4');
        let checks = 0

        checkboxAnswers.forEach(e => {
            e.addEventListener('click', () => {
                if (e.checked) { 
                    checks++ 
                    checked()
                } else { 
                    checks--
                    if (checks < 1) {
                        unchecked()
                    } 
                }
                if (checks > 2) {
                    e.checked = false
                    checks--
                    if (checks < 1) {
                        unchecked()
                    } 
                }
            })
        })

        function checked() {
            checkboxAnswers.forEach(e => {
                e.removeAttribute('required')
            })
        }
        function unchecked() {
            checkboxAnswers.forEach(e => {
                e.setAttribute('required', '')
            })
        }
    }

    function Ligthbox() {
        let formList = document.querySelector(".form__list_questions");
        let formQuestions = document.querySelectorAll(".form__question")

        let btnPrev = document.querySelector('.form__buttonPrev')
        let btnNext = document.querySelector('.form__buttonProx')

        let current = 0;

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
        }
    }
})()

