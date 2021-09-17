const navigaton = document.querySelectorAll('.complete-content_navigation-list-item')
const img = document.querySelector('.complete-content_main-image')
const dots = document.querySelectorAll('.complete-content_main-aside-arrows-dots-item')
const imgMobile = document.querySelector('.complete-content_main-aside-_mobile-img')

const setImage = (index) => {
    img.style.backgroundImage = `url(./assets/image${index}.jpg)`
    imgMobile.style.backgroundImage = `url(./assets/image${index}.jpg)`
}
const setNavigation = (index) => {
    navigaton.forEach(item => {
        if(item.classList.contains(`n${index}`)) {
            item.classList.add('active-navigation-item')
        } else {
            item.classList.remove('active-navigation-item')
        }
    })
}
const setDot = (index) => {
    dots.forEach(item => {
        if(item.classList.contains(`n${index}`)) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}    

navigaton.forEach(addIndexClass)
dots.forEach(addIndexClass)

const prev = document.querySelectorAll('.left')
const next = document.querySelectorAll('.right')
let currentIndex = 0

next.forEach(item => {
    item.addEventListener('click', () => {
        currentIndex === navigaton.length - 1 ? currentIndex = 0 : currentIndex++
        setImage(currentIndex);
        setDot(currentIndex)
        setNavigation(currentIndex) 
    })
})
prev.forEach(item => {
    item.addEventListener('click', () => {
        currentIndex === 0 ? currentIndex = navigaton.length - 1 : currentIndex--
        setImage(currentIndex);
        setDot(currentIndex)
        setNavigation(currentIndex)
    })
})


dots.forEach(setItem)
navigaton.forEach(setItem)


function setItem (item)  {
    item.addEventListener('click',(e) => {
        let index = +e.target.classList[1][1]
        if (typeof +index !== 'number' ) {
            return
        } else {    
        setImage(index)
        setDot(index)
        setNavigation(index)
        currentIndex = index
        }
    })
}

function addIndexClass (elem, index) {
    elem.classList.add(`n${index}`)
}

