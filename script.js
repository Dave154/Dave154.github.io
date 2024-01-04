
// NavToggle
const toggleBtn = document.querySelector('.toggle-menu')
 	const list = document.querySelector('.list')
 
 toggleBtn.addEventListener('click',()=>{
 	const listLink = document.querySelectorAll('.list-links')
 	list.classList.toggle('active')
 	listLink.forEach(link=>{
 	// link.addEventListener('click',()=>{
 	// 	list.classList.remove('active')
 	// }) 
 	})
 })
 document.addEventListener('click',(e)=>{
 	console.log(e.target.parentElement.parentElement)
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
 	const nav = document.querySelector('.nav')
 	if (scrollY >= 400) {
 		const nav = document.querySelector('.nav')
 		nav.classList.add('active')
 	}else{
 		nav.classList.remove('active')
 	}
  }

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