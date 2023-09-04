const press = document.querySelector(".press");
const keypress = document.querySelector(".keypress");
const key = document.querySelector(".key");
const keyCode = document.querySelector(".keyCode");
const code = document.querySelector(".code");

press.addEventListener("keydown", function () {
  if (!press.classList.contains("hidden")) {
    press.classList.add("hidden");
    keypress.classList.remove('hidden')
  }
});


document.addEventListener('keydown', function(event){
  key.value =  event.key === " "? 'Space' : event.key
  keyCode.value = event.keyCode
  code.value = event.code
})

