


// /**
//  * age function---
//  * @param {*} name 
//  * @param {*} year 
//  * @returns 
//  */


//  function age_cal(name, year){

//   let date = new Date();
//   let age1 = date.getFullYear() - year;
//   let agechk1 = ageMeter1(age1);
//   return `<p class="alert alert-${agechk1.status}">Hi ${name} you are ${age1} years old & your Gender status: ${select_group1.value} now you are ${agechk1.name1}</p>`

// }

// /**
// * age convert
// * @param {*} age1 
// * @returns 
// */


// function ageMeter1(age1){
//   if(age1 >=0 && age1 < 10){
//       return{
//           name1 : 'You Are still Child',
//           status : 'primary',
//       };
//   }else if(age1 >= 10 && age1 < 18){
//       return{
//           name1 : 'Teenager',
//           status : 'info',
//       };
//   }else if(age1 >= 18 && age1 < 25){
//       return{
//           name1 : 'Young',
//           status : 'success',
//       };
//   }else if(age1 >= 25 && age1 < 50){
//       return{
//           name1 : 'Going to old',
//           status : 'warning',
//       };
//   }else{
//       return{
//           name1 : 'Sorry Dear, out of age',
//           status : 'danger',
//       };
//   };
//   }




























/// SIGNUP_FORM ALL SELECTOR
const signup_form = document.querySelectorAll('#signup_form');

//// SIGNUP_FORM [0] SELECTOR
const name = document.querySelector('#name');
const year = document.querySelector('#year');
const result = document.querySelector('#result');


// SIGNUP_FORM [1] SELECTO
const namek = document.querySelector('#namek');
const yeark = document.querySelector('#yeark');
const selectk = document.querySelector('#selectk');
const resultk = document.querySelector('#resultk');


//// SIGNUP|_FORM [2]
const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const currency2 = document.querySelector('#currency2');


//// SIGNUP_FORM [3] SELECTOR
const fname4 = document.querySelector('#fname');
const lname4 = document.querySelector('#lname');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');


///// Signup_form 0
signup_form[0].addEventListener('submit', function (e) {
  e.preventDefault();

  name.style.border = (name.value == '') ? '1px solid red' : '1px solid black';
  year.style.border = (year.value == '') ? '1px solid red' : '1px solid black';


  if (name.value == '' || year.value == '') {
    result.innerHTML = `<p class= "alert alert-danger"> All fields are required !  </p>`
  } else

  result.innerHTML = agecal(name.value, year.value);
  name.value = '';
  year.value = '';


});


//// SIGNUP_FORM [1]
signup_form[1].addEventListener('submit', function (e) {
  e.preventDefault();

  namek.style.border = (namek.value == '') ? '1px solid red' : '1px solid black';
  yeark.style.border = (yeark.value == '') ? '1px solid red' : '1px solid black';
  // selectk.style.border = (selectk.value == '') ? '1px solid red' : '1px solid black';

  if (namek.value == '' || yeark.value == ''|| selectk.value == '') {
    resultk.innerHTML = `<p class= "alert alert-danger"> All fields are required !  </p>`
  } else{

  }









});


//// SIGNUP_FORM [2]
signup_form[2].addEventListener('submit', function (e) {
  e.preventDefault();

  amount.style.border = (amount.value == '') ? '1px solid red' : '1px solid black';
  currency.style.border = (currency.value == '') ? '1px solid red' : '1px solid black';

  if (amount.value == '' || currency.value == '') {
    currency2.innerHTML = `<p class= "alert alert-danger"> All fields are required !  </p>`
  } else {
    if (currency.value == currency.children[1].value) {
      currency2.innerHTML = `
         ${amount.value} TK = ${amount.value * currency.value} USD
        `
    } else if (currency.value == currency.children[2].value) {
      currency2.innerHTML = `
         ${amount.value} TK = ${amount.value * currency.value} CDA
        `
    } else if (currency.value == currency.children[3].value) {
      currency2.innerHTML = `
         ${amount.value} TK = ${amount.value * currency.value} Pound 
        `
    } else if (currency.value == currency.children[4].value) {
      currency2.innerHTML = `
         ${amount.value} TK = ${amount.value * currency.value} Euro
        `
    } else if (currency.value == currency.children[5].value) {
      currency2.innerHTML = `
         ${amount.value} TK = ${amount.value * currency.value} Dinar
        `
    }
  }








});



////SIGNUP_FORM [3]
signup_form[3].addEventListener('submit', function (e) {
  e.preventDefault();

  //    if(email.value = ''){
  //        email.style.border = '1px solid red'
  //    }else{
  //     email.style.border = '1px solid black'
  //    }

  //    if(fname.value = ''){
  //        fname.style.border = '1px solid red'
  //    }else{
  //     fname.style.border = '1px solid black'
  //    }

  //    if(lname.value = ''){
  //        lname.style.border = '1px solid red'
  //    }else{
  //     lname.style.border = '1px solid black'
  //    }

  email.style.border = (email.value == '') ? '1px solid red' : '1px solid black';
  fname.style.border = (fname.value == '') ? '1px solid red' : '1px solid black';
  lname.style.border = (lname.value == '') ? '1px solid red' : '1px solid black';



  if (fname.value == '' || lname.value == '' || email.value == '') {
    msg.innerHTML = `<p class= "alert alert-danger"> All fields are required !  </p>`
  } else {
    msg.innerHTML = `<p class= "alert alert-success"> Data Stable</p>`
  }

});