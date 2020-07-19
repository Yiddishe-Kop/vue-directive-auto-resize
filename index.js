const autoSizeHeight = el => {
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight}px`;
}
const handler = e => {
  autoSizeHeight(e.target)
}

export default {
  bind(el) {
    ['input', 'change'].forEach(event => {
      el.addEventListener(event, handler)
    })
  },

  inserted(el) {
    autoSizeHeight(el)
  },

  unbind(el) {
    ['input', 'change'].forEach(event => {
      el.removeEventListener(event, handler)
    })
  }
}
