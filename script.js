const hero = document.querySelector('.hero')
const about = document.querySelector('.about')
const Services = document.querySelector('.services')
const Reviews = document.querySelector('.reviews')
const work_Info= document.querySelectorAll('.work-info')
console.log(hero.getBoundingClientRect())
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
 	if (e.target.scrollTop>= 1) {
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
       

//VIDEOS
const videos= document.querySelectorAll('.video')
console.log(videos[0])
const playBtn=document.querySelectorAll('.play_btn')
playBtn.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        
        videos.forEach((video)=>{
            if (video.play() &&  !video.parentElement.classList.contains('active') ){
                console.log('hey')
                video.pause()
            }
            video.parentElement.classList.remove('active')
           video.pause()
        video.classList.remove('active') 
        })
       
        videos[index].play()
        if (videos[index].play()) {
            videos[index].parentElement.classList.add('active')
        }else{
              videos[index].parentElement.classList.remove('active')
        }
        videos[index].classList.add('active')
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

// INTERSECTION OBSERVER
const options ={
    rootMargin:'0px',
    threshold:[.25,.5,.75,1]
}

const func=(entries)=>{
 entries.forEach(entry=>{
    if (entry.isIntersecting) {
       if (entry.target.className !== 'work-info') {
        console.log(entry.target)
              work_Info.forEach((work)=>{
                work.classList.remove('active')
            })
         }
        if (entry.target.id === 'Home') {
            entry.target.classList.add('scroll')
        }
        if (entry.target.id === 'About') {
            entry.target.classList.add('scroll')
        }
        if (entry.target.id === 'Services') {
            entry.target.classList.add('scroll')
        }

        if (entry.target.className === 'work') {
            console.log(entry.target)
        }
   

    // observer.unobserve(entry.target)
    }
    })
}

// const options_2 ={
//     rootMargin:'100px',
//     threshold:1
// }

// const func_2=(entries)=>{
//  entries.forEach(entry=>{
//     if (entry.isIntersecting) {
//          console.log(entry)
   
//         if (entry.target.className === 'work-info') {
//             work_Info.forEach((work)=>{
//                 work.classList.remove('active')
//             })
//             console.log(entry.target)
//           entry.target.classList.add('active')
//           }

//      // observer_2.unobserve(entry.target)
//     }
//     })
// }


const observer = new IntersectionObserver(func,options)
observer.observe(hero)
observer.observe(about)
observer.observe(Services)
observer.observe(Reviews)

// const observer_2 = new IntersectionObserver(func_2,options_2)
// work_Info.forEach((work)=>{
// observer_2.observe(work)
// })