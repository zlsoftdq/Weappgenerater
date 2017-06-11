import { shell } from 'electron'

document.body.addEventListener('click', e => {
  let href
  let isExternal = false

  const checkDomElement = element => {
    if (element.nodeName === 'A') {
      href = element.getAttribute('href')
    }
    if (element.classList.contains('js-external-link')) {
      isExternal = true
    }
    if (href && isExternal) {
      shell.openExternal(href)
      e.preventDefault()
    } else if (element.parentElement) {
      checkDomElement(element.parentElement)
    }
  }

  checkDomElement(e.target)
}, false)
