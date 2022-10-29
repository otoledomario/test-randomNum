const inputInitNum = document.querySelector('#initNum'),
  inputEndNum = document.querySelector('#endNum'),
  btnSubmit = document.querySelector('#submitForm'),
  screen1 = document.querySelector('.screen1'),
  screen2 = document.querySelector('.screen2'),
  spanNumScreen2 = screen2.querySelector('h2 span'),
  again = document.querySelector('#again')

inputInitNum.addEventListener('change', handleChangeMinNum())
btnSubmit.addEventListener('click', handleGenerateRandomNum)
again.addEventListener('click', handleTryAgain)

function toggleScreens(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleChangeMinNum(){
  inputEndNum.setAttribute('min', Number(inputInitNum.value) + 1)
}

function handleGenerateRandomNum(e){
  e.preventDefault()

  const minNum = Number(inputInitNum.value),
    maxNum = Number(inputEndNum.value),
    randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  if(minNum > maxNum || (minNum == 0 && maxNum == 0)){
    return
  }
  toggleScreens()
  spanNumScreen2.innerHTML = randomNum
}

function handleTryAgain(){
  toggleScreens()
}
