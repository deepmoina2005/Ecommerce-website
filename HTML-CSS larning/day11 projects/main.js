let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let sc = document.querySelector('#sc');

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotate2(${hh+(mm/12)}deg)`;