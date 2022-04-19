window.onload = function () {
    let lightMinus = document.querySelector("#lightMinus"),
      lightPlus = document.querySelector("#lightPlus"),
      tempMinus = document.querySelector("#tempMinus"),
      tempPlus = document.querySelector("#tempPlus"),
      lightAmount = document.querySelector("#lightAmount"),
      tempAmount = document.querySelector("#tempAmount");
  
    const minus = (target, min) => {
        let number = parseInt(target.innerText)
  
      if (number > min) {
          number--; /// Minus 1 of the number
        target.innerText = number; /// Display the value in place of the number
      }
      if (number == min) {
        target.style.color = "red";
        setTimeout(function () {
          target.style.color = "white";
        }, 500);
      } else {
        target.style.color = "white";
      }
    };
  
    const plus = (target, max) => {
      let number = parseInt(target.innerText)
  
      if (number < max) {
        number = number + 1;
        target.innerText = number; /// Display the value in place of the number
      }
      if (number == max) {
        target.style.color = "red";
        setTimeout(function () {
          target.style.color = "white";
        }, 500);
      } else {
        target.style.color = "white";
      }
    };
  
    lightMinus.onclick = () => minus(lightAmount, 0);
  
    lightPlus.onclick = () => plus(lightAmount, 100);
  
    tempMinus.onclick = () => minus(tempAmount, 17);
  
    tempPlus.onclick = () => plus(tempAmount, 24);
  };
  