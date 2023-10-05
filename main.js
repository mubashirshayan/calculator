let input = document.getElementById('input');

var str = ''
//input.value=''
function number(value) {
  input.value += value;
  str += value;
}

function operation(val) {
  try {

    let newNum = val;
    let last = str[str.length - 1];
    let arr = ['*', '/', '+', '-', '%'];

    if (arr.indexOf(last) !== -1 && arr.indexOf(newNum) !== -1) {
      str = str.slice(0, -1) + newNum;
      input.value = str;
    } else {
      str += newNum;
      input.value = str;
    }
  }
  catch {
    (err) => {
      console.log('message:', err.message)
    }

  }

}

function equal() {
  try { //console.log(eval(str));
    let equal = eval(str);
    input.value = equal;
    str = equal
  }
  catch {
    input.value = 'Syntex Error'
    console.log('Syntex Error')
  }
}

function ac(){
  input.value = ''
  str = ''
}

function del() {
  str = input.value.slice(0,-1);
  input.value = str;
}