let show = false
document.querySelector('.nav__menu-icon').onclick = function() {
  show = !show
  const menu = document.querySelector('.nav__menu-list')

  if(show) {
    this.setAttribute('src', 'assets/img/close.png')
    menu.style.display = 'block'

    return false
  }
  
  this.setAttribute('src', 'assets/img/menu.png')
  menu.style.display = 'none'
}

const slideshow = (control, box, list) => {
  control.forEach((el, key) => {
    const elem = el
    const index = key
  
    elem.onclick = function() {
      control.forEach(el => {
        el.classList.remove('main__box-controls--active')
      })
  
      box.forEach(el => {
        el.classList.remove('main__box--active-sp')
      })
  
      let left = box[index].offsetLeft - 20
      
      list.scrollTo({
        top: 0,
        left,
        behavior: 'smooth'
      })
  
      box[index].classList.add('main__box--active-sp')
      control[index].classList.add('main__box-controls--active')
    }
  })
}

const insight = document.querySelectorAll('.js-controls-insight')
const insightBox = document.querySelectorAll('.js-insight-box')
const insightList = document.querySelector('.js-insight-list')

slideshow(insight, insightBox, insightList)

const event = document.querySelectorAll('.js-event-controls')
const eventBox = document.querySelectorAll('.js-event-box')
const eventList = document.querySelector('.js-event-list')

slideshow(event, eventBox, eventList)