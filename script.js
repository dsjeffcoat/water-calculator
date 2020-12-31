const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remainder = document.getElementById('remainder')

updateMainCup()

smallCups.forEach((cup, idx) => {
    // console.log(idx)
    cup.addEventListener('click', () => {
        highlightCups(idx)
    })
})

// Fill up the small cups

function highlightCups(idx) {
    // console.log(index)
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateMainCup()
}

// Increment the main cup

function updateMainCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length

    // console.log(fullCups)
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }

}