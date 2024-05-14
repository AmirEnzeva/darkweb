let $ = document;

let mobileNav = $.querySelector('.mobile-nav-icon');
let menu = $.querySelector('.menu');
let cover = $.querySelector('.cover');
let resumeListItems = $.querySelectorAll('.resume-list__item')
let protfolioListItems = $.querySelectorAll('.portfolio-list__item')

function navTap(listItems,elementActiveClass,elementOpenClass) {
    listItems.forEach(function(listItem){  
        listItem.addEventListener('click',function(){
            $.querySelector(`.${elementActiveClass}`).classList.remove(elementActiveClass);
            listItem.classList.add(elementActiveClass);
            $.querySelector(`.${elementOpenClass}`).classList.remove(elementOpenClass);
            $.querySelector(this.getAttribute('data-content-id')).classList.add(elementOpenClass)
        })
        
    })
}

mobileNav.addEventListener('click',function(){
    this.classList.toggle('mobile-nav-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--open')
})

navTap(resumeListItems,'resume-list__item--active','resume-content--show')
navTap(protfolioListItems,'portfolio-list__item--active','portfolio-content--active')