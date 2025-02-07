// For 1 Rupee
let count = 0;
let display = document.getElementById("money1");
function changecount1(value) {
  if (value === 1) {
    count = count + 1;
  } else {
    if (count != 0) {
      count = count - 1;
    }
  }
  display.innerHTML = count;
  refreshtotal();
}

// For 2 Rupee

let count1 = 0;
let display1 = document.getElementById("money2");
function changecount2(value) {
  if (value === 1) {
    count1 = count1 + 1;
  } else {
    if (count1 != 0) {
      count1 = count1 - 1;
    }
  }
  display1.innerHTML = count1;
  refreshtotal();
}

// For 5 Rupee

let count2 = 0;
let display2 = document.getElementById("money5");
function changecount5(value) {
  if (value === 1) {
    count2 = count2 + 1;
  } else {
    if (count2 != 0) {
      count2 = count2 - 1;
    }
  }
  display2.innerHTML = count2;
  refreshtotal();
}

// For 10 Rupee

let count3 = 0;
let display3 = document.getElementById("money10");
function changecount10(value) {
  if (value === 1) {
    count3 = count3 + 1;
  } else {
    if (count3 != 0) {
      count3 = count3 - 1;
    }
  }
  display3.innerHTML = count3;
  refreshtotal();
}

// For 20 Rupee

let count4 = 0;
let display4 = document.getElementById("money20");
function changecount20(value) {
  if (value === 1) {
    count4 = count4 + 1;
  } else {
    if (count4 != 0) {
      count4 = count4 - 1;
    }
  }
  display4.innerHTML = count4;
  refreshtotal();
}

// For 50 Rupee

let count5 = 0;
let display5 = document.getElementById("money50");
function changecount50(value) {
  if (value === 1) {
    count5 = count5 + 1;
  } else {
    if (count5 != 0) {
      count5 = count5 - 1;
    }
  }
  display5.innerHTML = count5;
  refreshtotal();
}

// For 100 Rupee

let count6 = 0;
let display6 = document.getElementById("money100");
function changecount100(value) {
  if (value === 1) {
    count6 = count6 + 1;
  } else {
    if (count6 != 0) {
      count6 = count6 - 1;
    }
  }
  display6.innerHTML = count6;
  refreshtotal();
}

// For 200 Rupee

let count7 = 0;
let display7 = document.getElementById("money200");
function changecount200(value) {
  if (value === 1) {
    count7 = count7 + 1;
  } else {
    if (count7 != 0) {
      count7 = count7 - 1;
    }
  }
  display7.innerHTML = count7;
  refreshtotal();
}

// For 500 Rupee

let count8 = 0;
let display8 = document.getElementById("money500");
function changecount500(value) {
  if (value === 1) {
    count8 = count8 + 1;
  } else {
    if (count8 != 0) {
      count8 = count8 - 1;
    }
  }
  display8.innerHTML = count8;
  refreshtotal();
}

function refreshtotal() {
  let counttotal = 0;
  let displaytotal = document.getElementById("totalmoney");
  counttotal =
    count * 1 +
    count1 * 2 +
    count2 * 5 +
    count3 * 10 +
    count4 * 20 +
    count5 * 50 +
    count6 * 100 +
    count7 * 200 +
    count8 * 500;
  displaytotal.innerHTML = counttotal;
}
