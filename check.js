const passCheck = document.getElementById('pass-check')
const strengthElem = document.getElementById('strength')

function checkStrength() {
    passwordStrength(passCheck.value)
  }
  passCheck.addEventListener('input', checkStrength)
  function passwordStrength(password) {
    let strength = 0
    if (password.length > 8) {
        strength += 1
    }
    if (password.match(/[a-z]/)) {
        strength += 1
    }
    if (password.match(/[A-Z]/)) {
        strength += 1
    }
    if (password.match(/[0-9]/)) {
        strength += 1
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
        strength += 1
    }
      if (strength <= 1) {
        strengthElem.innerHTML = ' ❌ Weak Password'
        strengthElem.style.color = 'red'
        // console.log('week');
    }
    if (strength >= 2) {
      strengthElem.innerHTML = '⚠️ Good Password'
      strengthElem.style.color = '#DBA419'
  
        // console.log('GOod');
    }
    if (strength > 3) {
        strengthElem.innerHTML = ' ✅ Strong Password'
        strengthElem.style.color = '#11A927'
        // console.log('strong');
    }
  }

  const dark = document.getElementById('dark')
const light = document.getElementById('light')

function toggleDark(){
    dark.classList.add('d-none')
    light.classList.remove('d-none')
    document.body.style.backgroundColor = "#212224"
    document.body.style.color = "#fff"
}

dark.addEventListener('click', toggleDark)

function toggleLight(){
    light.classList.add('d-none')
    dark.classList.remove('d-none')
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "#000"
}
light.addEventListener('click', toggleLight)