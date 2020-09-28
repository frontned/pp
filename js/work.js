const workItems = document.querySelectorAll('.js-work-item')

window.addEventListener('scroll', () => {
  Array.from(workItems).forEach(workItem => {
    console.log(workItem.getBoundingClientRect().y)
    if (workItem.getBoundingClientRect().y <= 100) {
      workItem.classList.add('animate')
    } else {
      workItem.classList.remove('animate')
    }
  })
})


