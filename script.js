setInterval(timing, 1000)

function formate(val) {
    if (val <= 9) {
        val = "0" + val;
    }
    return val;
}

let h = document.getElementById("hour");
let m = document.getElementById("min");
let s = document.getElementById("sec");

function timing() {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  h.innerText = formate(hour);
  m.innerText = formate(minute);
  s.innerText = formate(second);
}

