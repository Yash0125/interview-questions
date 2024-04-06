// Debouncing : you can take search bar example for understanding. So
// whenever you search when you stop typing api will call after 300ms it's
// not calll every time it's call debouncing

// Throttling : you can take a example of button. let say you click 5 time
//in 500 seconds but delay set for call is 500ms seconds. So it will after
//500ms after one click not 5 times.

// Assum HTML input with serch class and onchange ="betterFunc()"

let counter = 0;

function getData() {
  console.log("function call", counter++);
}

function myDebounce(call, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, delay);
  };
}

const betterFunc = myDebounce(getData, 1000);

// assume one button onclick="newFun()"

function throttle(call, delay) {
  let timeoutId;

  return function (...args) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        call(...args);
        timeoutId = null;
      }, delay);
    }
  };
}

const newFun = throttle(() => console.log("clicked"), 2000);
