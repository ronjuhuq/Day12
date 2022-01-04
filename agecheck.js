


// /** AGE CALCULATOR FUNCTION */

// const sign_up_form1 = document.querySelector('#signup_form1');
// const name1 = document.querySelector('#name1');
// const p_age = document.querySelector('#p_age');
// const p_age1 = document.querySelector('#p_age1');
// const p_age2 = document.querySelector('#p_age2');
// const p_age3 = document.querySelector('#p_age3');
// const select_group1 = document.querySelector('#select_group1');
// const year1 = document.querySelector('#year1');
// const submit = document.querySelector('#submit');
// const msg = document.querySelector('#msg');

// name1.addEventListener('keyup', () => {

//     const agename = name1.value;

//     const agepattern = /^[a-zA-Z][^0-9\.!@#$%&]*$/;

//     if (agename.value = '') {
//         p_age.innerHTML = ` <p class="alert alert-danger"> Wrong credentials
//        Invalid name</p>
//        `
//         agename.style.border = "red 1px solid"

//     } else if (agepattern.test(agename) == false) {
//         p_age.innerHTML = `<p class="text-danger">*plz input valid name & {0-9.!@#$%&} are not allowed*</p>`

//     } else if (agepattern.test(agename) == true) {
//         p_age.innerHTML = ` `;

//         agename.style.border = "#27ae60 1px solid";

//     } else {

//     };

// });


// year1.addEventListener('keyup' , () =>{
//     const ageyear = year1.value;
//     const yearpattern = /^[0-9]{4}$/

//     if(year1.value == ''){
//         p_age1.innerHTML = `<p class="text-danger">*year fields can't be empty*</p>`;
//         year1.style.border = "red 1px solid";
//     }
//     else if(yearpattern.test(ageyear) == false){
//         p_age1.innerHTML = `<p class="text-danger">plz input valid year & {a-zA-Z.!@#$%&} are not allowed</p>`
//         year1.style.border = "red 1px solid";
//     }else if(yearpattern.test(ageyear) == true){
//         p_age1.innerHTML = ``;
//         year1.style.border = "#27ae60 1px solid";
//     }else{

//     };

// });

// select_group1.addEventListener('change' , () =>{
//     if(select_group1.value == select_group1.children[1].value || select_group1.value == select_group1.children[2].value){
//         p_age2.innerHTML = ` `;
//         select_group1.style.border = "#27ae60 1px solid";
//     }else{
//         select_group1.style.border = "red 1px solid";
//         p_age2.innerHTML = `<p class="text-danger">select other except this</p>`;
//     }
//  });


 
//  sign_up_form1.addEventListener('submit' , (e) =>{
//     e.preventDefault();
//     if(name1.value == '' || year1.value == '' || select_group1.value == select_group1.children[0].value){
//         p_age3.innerHTML = '<p class = "alert alert-danger">*plese fill up form*</p>';
//         name1.style.border ="red 1px solid";
//         year1.style.border ="red 1px solid";
//         select_group1.style.border ="red 1px solid";
//     }else{
//         p_age3.innerHTML = age_cal(name1.value, year1.value);
//         name1.value= '';
//         year1.value = '';
//         name1.style.border ="#27ae60 1px solid";
//         year1.style.border ="#27ae60 1px solid";
//         select_group1.style.border ="#27ae60 1px solid";
//     }
// });


































/**
 *  Age calculation [0]
 * @param {*} age 
 * @returns 
 */
function checkAgeStatus(age) {
    if (age > 0 && age < 10) {
        return {
            name: 'Babu',
            status: 'primary',
        };
    } else if (age > 10 && age < 35) {
        return {
            name: 'Jobok',
            status: 'success',
        };
    } else if (age > 35 && age < 60) {
        return {
            name: 'Young',
            status: 'info',
        };
    } else if (age > 60 && age < 100) {
        return {
            name: 'Old',
            status: 'danger',
        };
    }
    return {
        name: 'Bhoot / Jin',
        status: 'dark',
    };
};

 /**
 * Agecal [0]
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */

function agecal(name, year) {

    const date = new Date();

    age = date.getFullYear() - year;
    const agestatus = checkAgeStatus(age);
    return ` <p class=" alert alert-${agestatus.status}">Hi ${name} You are ${age} years old & You are ${ agestatus.name}</p>`

}

