
// NavToggle
const toggleBtn = document.querySelector('.toggle-menu')
 	const list = document.querySelector('.list')
 
 toggleBtn.addEventListener('click',()=>{
 	const listItems = document.querySelectorAll('.list-items')
 	list.classList.toggle('active')
 	listItems.forEach(link=>{
 	// link.addEventListener('click',()=>{
 	// 	list.classList.remove('active')
 	// }) 
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

 window.onscroll=()=>{
 		const header = document.querySelector('.header')
 	if (scrollY >= 200) {
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

console.log(removeServiceBtn)


serviceCard.forEach(card=>{
    card.addEventListener('click',()=>{
        for(service of aboutServices){
            service.classList.remove('active')
        }
        aboutServices.forEach(service=>{
            if (service.classList[1] === card.classList[1]) {
            console.log(service.parentElement.parentElement)
                service.classList.add('active')
                service.parentElement.parentElement.classList.add('active')
            }
        })
        // for(item of tabs){
        //     item.classList.remove('active')
        // }
        // tab.classList.add('active')
    })
})
            removeServiceBtn.forEach(btn=>{
            btn.addEventListener('click', ()=>{
                console.log('hey')
                for(service of aboutServices){
                service.classList.remove('active')
                service.parentElement.parentElement.classList.remove('active')
        }
            })
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