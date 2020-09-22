const fullScreenMenu = document.querySelector('.js-full-screen-menu')
let open = false

const initEventListeners = () => {
  const burgers = document.querySelectorAll('.js-burger')

  burgers.forEach(burger => {
    burger.addEventListener('click', () => {
      open = !open
      handleFullScreenMenu()
    })
  })

  fullScreenMenu.addEventListener('click', () => {
    open = false
    handleFullScreenMenu()
  })
}

initEventListeners()

const handleFullScreenMenu = () => {
  if (open) {
    document.body.style.overflow = 'hidden'
    fullScreenMenu.classList.add('full-screen-menu--open')
  } else {
    document.body.style.overflow = 'auto'
    fullScreenMenu.classList.remove('full-screen-menu--open')
  }
}
