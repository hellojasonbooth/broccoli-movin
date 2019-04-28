
const animation = {
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/data.json'
}

let speed = 1

anim = bodymovin.loadAnimation(animation)

function faster() {
    speed = speed * 1.5
    if (speed > 3)
    speed = 3
    anim.setSpeed(speed)
  
  showSpeed()
}

function slower() {
    speed = speed / 1.5
    if (speed < 0.5)
    speed = 0.5
    anim.setSpeed(speed)
  
  showSpeed()
}

function pause() {
    anim.pause();
}

function play() {
    anim.play()
}

function reverse() {
    anim.setDirection(-1)
}

function forward() {
    anim.setDirection(1)
}

const speedTag = document.getElementById('speed')

const showSpeed = function () {
  speedTag.innerHTML = speed.toFixed(1)
}




