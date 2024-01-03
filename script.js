
// NavToggle
const toggleBtn = document.querySelector('.toggle-menu')
 
 toggleBtn.addEventListener('click',()=>{
 	const list = document.querySelector('.list')
 	const listLink = document.querySelectorAll('.list-links')
 	list.classList.toggle('active')
 	listLink.forEach(link=>{

 	link.addEventListener('click',()=>{
 		list.classList.remove('active')
 	}) 
 	})
 })