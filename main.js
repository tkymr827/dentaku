let show = document.getElementsByClassName("show")

function btn(e){
  console.log(e) 
  show[0].innerHTML += e 
}

function ans(){
  show[0].innerHTML = eval(show[0].innerHTML)
}

function back(){
  backsp = show[0].textContent
  backsp = backsp.slice(0,-1)
  show[0].innerHTML = backsp
}

function dlt(){
  show[0].innerHTML = ""
}