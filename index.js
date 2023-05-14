const select = document.querySelector('.search__select')
const input = document.querySelector('.search__input')
const button = document.querySelector('.search__button')
const result = document.querySelector('.result')

function getResult() {
    try {
        for (i = 1; i < 11; i++) {
            if (select.value == "Людей" && input.value == i) {
                fetch(`https://swapi.dev/api/people/ + ${i}`)
                    .then(response => response.json())
                    .then(character => {
                        result.innerText = character.name
                    })
            }
        }

        if (select.value == "Людей" &&
            i > 10) {
            throw new Error("Введите, пожалуйста, значение, меньше или равное 10")
        }
    } catch (e) {
        result.innerText = e.message
    }

    try {
        for (i = 1; i < 11; i++) {
            if (select.value == "Планеты" && input.value == i) {
                fetch(`https://swapi.dev/api/planets/ + ${i}`)
                    .then(response => response.json())
                    .then(planet => {
                        result.innerText = planet.name
                    })
            }
        }

        if (select.value == "Планеты" && i > 10) {
            throw new Error("Введите, пожалуйста, значение, меньше или равное 10")
        }
    } catch (error) {
        result.innerText = error.message
    }

    try {
        for (i = 1; i < 7; i++) {
            if (select.value == "Фильмы" && input.value == i) {
                fetch(`https://swapi.dev/api/films/ + ${i}`)
                    .then(response => response.json())
                    .then(film => {
                        result.innerText = film.title
                    })
            }
        }

        if (select.value == "Фильмы" && i > 6) {
            throw new Error("Введите, пожалуйста, значение, меньше или равное 7")
        }
    } catch (err) {
        result.innerText = err.message
    } finally {
        result.innerText = 'Идет загрузка'
    }
}

button.addEventListener('click', getResult)