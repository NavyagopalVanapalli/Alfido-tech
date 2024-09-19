function Solve(val) {
  var v = document.getElementById('res');
  v.value += val;
}

function Result() {
  var num1 = document.getElementById('res').value;
  try {
      var num2 = eval(num1.replace('x', '*'));
      document.getElementById('res').value = num2;
  } catch {
      document.getElementById('res').value = 'Error';
  }
}

function Clear() {
  var inp = document.getElementById('res');
  inp.value = '';
}

function Back() {
  var ev = document.getElementById('res');
  ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const validKeys = '0123456789+-*/.%';
  if (validKeys.includes(key)) {
      Solve(key === '*' ? 'x' : key);
  } else if (key === 'Enter') {
      Result();
  } else if (key === 'Backspace') {
      Back();
  } else if (key.toLowerCase() === 'c') {
      Clear();
  }
});

let toggleElement = document.getElementById("darkmode-toggle");

function Darkmode() {
  document.getElementById("content").classList.toggle("mystyle");
  if (toggleElement.checked) {
      document.getElementById("content").style.backgroundColor = "#181717";
      document.getElementById("content").style.boxShadow = "inset 3px 3px 10px grey , 5px 4px  10px grey";

  } else {
      document.getElementById("content").style.backgroundColor = "#ecf0f9";
      document.getElementById("content").style.boxShadow = "inset 5px 5px 12px #ffffff, 5px 5px 12px rgba(0, 0, 0, .16)";
  }
}