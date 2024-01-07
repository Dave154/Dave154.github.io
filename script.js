
// NavToggle
const toggleBtn = document.querySelector('.toggle-menu');
 	const list = document.querySelector('.list');
 
 toggleBtn.addEventListener('click',()=>{
 	const listItems = document.querySelectorAll('.list-items')
 	list.classList.toggle('active')
 	listItems.forEach(link=>{
 	})
 })
 document.addEventListener('click',(e)=>{
 	let test =e.target.parentElement.parentElement
 	if (test.tagName !== 'NAV') {
 		list.classList.remove('active')
 	}
  if (list.classList.contains('active')) {
  	toggleBtn.classList.add('active')
  }else{
  	toggleBtn.classList.remove('active')
  }
 })

 document.querySelector('.container').onscroll=(e)=>{
 		const header = document.querySelector('.header')
 	if (e.target.scrollTop>= 800) {
 		header.classList.add('active')
 	}else{
 		header.classList.remove('active')
 	}
  }
// ABOUT   
const tabs = document.querySelectorAll('.about-tab');
const deets = document.querySelectorAll('.deets-content')
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        for(deet of deets){
            deet.classList.remove('active')
        }
        deets.forEach((deet,index)=>{
            if (deet.classList[1] === tab.textContent.toLowerCase()) {
                deet.classList.add('active')
            }
        })
        for(item of tabs){
            item.classList.remove('active')
        }
        tab.classList.add('active')
    })
})


// SERVICES
const serviceCard = document.querySelectorAll('.service-card')
 const aboutServices = document.querySelectorAll('.about-service')
 const removeServiceBtn = document.querySelectorAll('.remove-service-btn')
serviceCard.forEach(card=>{
    card.addEventListener('click',()=>{
        for(service of aboutServices){
            service.classList.remove('active')
        }
        aboutServices.forEach(service=>{
            if (service.classList[1] === card.classList[1]) {
                service.classList.add('active')
                service.parentElement.parentElement.classList.add('active')
            }
        })
    })
})
const remove =()=>{
    for(service of aboutServices){
    service.classList.remove('active')
    service.parentElement.parentElement.classList.remove('active')
 }
}
removeServiceBtn.forEach(btn=>{
btn.addEventListener('click', remove)
document.onkeyup=(e)=>{
    if (e.key=== 'Escape') {
        remove()
    }
}
})
       


 // SWIPER

const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor:true,
   slidesPerView:1,
   spaceBetween:40,
autoplay:{
    delay:2000,
   },
   speed:1000,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    1000:{
        slidesPerView:2,
    },
  }
});

// INTERSECTION OBSERVER
const hero = document.querySelector('.hero')
const about = document.querySelector('.about')
const Services = document.querySelector('.services')
const options ={
    rootMargin:'0px',
    threshold:.5
}

const func=(entries)=>{
 entries.forEach(entry=>{
    if (entry.isIntersecting) {
        if (entry.target.id === 'Home') {
            entry.target.classList.add('scroll')
        }
        if (entry.target.id === 'About') {
            entry.target.classList.add('scroll')
        }
        if (entry.target.id === 'Services') {
            entry.target.classList.add('scroll')
        }
   

    observer.unobserve(entry.target)
    }
    })
}

const observer = new IntersectionObserver(func,options)
observer.observe(hero)
observer.observe(about)
observer.observe(Services)