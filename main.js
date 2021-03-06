window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)   
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}

function showNavOnScroll(){
    if (scrollY > 0)
        navigationFixed.classList.add('scroll')
    else
        navigationFixed.classList.remove('scroll')
}

function showBackToTopButtonOnScroll(){
    if (scrollY > 300)
        backToTopButton.classList.add('show')
    else
        backToTopButton.classList.remove('show')
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);