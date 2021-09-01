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


const prev = document.querySelectorAll('.left')
const next = document.querySelectorAll('.right')
console.log(prev)
console.log(next)
let currentIndex = 0
next.forEach(item => {
    item.addEventListener('click', () => {
        currentIndex === 2 ? currentIndex = 0 : currentIndex += 1
        setImage(currentIndex);
        setDot(currentIndex)
        setNavigation(currentIndex) 
        console.log('click next')
    })
})
prev.forEach(item => {
    item.addEventListener('click', () => {
        currentIndex === 0 ? currentIndex = 2 : currentIndex -= 1
        setImage(currentIndex);
        setDot(currentIndex)
        setNavigation(currentIndex)
        console.log('click previous')
    })
})


dots.forEach(setItem)
navigaton.forEach(setItem)

function setItem (item)  {
    item.addEventListener('click', () => {
        if (item.classList.contains('n0')) {
            setImage(0)
            setDot(0)
            setNavigation(0)
        } else if (item.classList.contains('n1')) {
            setImage(1)
            setDot(1)
            setNavigation(1)
        } else {
            setImage(2)
            setDot(2)
            setNavigation(2)
        }
    })
}