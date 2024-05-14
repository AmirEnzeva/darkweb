let $ = document;

let mobileNav = $.querySelector('.mobile-nav-icon');
let menu = $.querySelector('.menu');
let cover = $.querySelector('.cover');
let resumeListItems = $.querySelectorAll('.resume-list__item')
let protfolioListItems = $.querySelectorAll('.portfolio-list__item')
let menuitems = $.querySelectorAll('.menu-item')

function navTap(listItems,elementActiveClass,elementOpenClass) {
    listItems.forEach(function(listItem){  
        listItem.addEventListener('click',function(){
            removeClass(elementActiveClass)
            listItem.classList.add(elementActiveClass);
            removeClass(elementOpenClass)
            $.querySelector(this.getAttribute('data-content-id')).classList.add(elementOpenClass)
        })
        
    })
}
function removeClass(className){
    $.querySelector(`.${className}`).classList.remove(className);
}
navTap(resumeListItems,'resume-list__item--active','resume-content--show')
navTap(protfolioListItems,'portfolio-list__item--active','portfolio-content--active')
mobileNav.addEventListener('click',function(){
    this.classList.toggle('mobile-nav-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--open')
})
menuitems.forEach(function(menuitem) {
    menuitem.addEventListener('click',function(event){
        event.preventDefault();
        removeClass('menu-item--active')
        menuitem.classList.add('menu-item--active')
        let activedSection = $.querySelector('.menu-item--active');
        console.log(activedSection.getAttribute('data-section'));

    })
})