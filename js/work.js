const workSection = document.querySelector('.js-work')
const firstWorkItem = document.querySelector('.js-first-work-item')
let visible = false

window.addEventListener('scroll', () => {
  if (workSection.getBoundingClientRect().y <= -50) {
    visible = true
    firstWorkItem.classList.add('animate')
  } else {
    visible = false
    firstWorkItem.classList.remove('animate')
  }
})


