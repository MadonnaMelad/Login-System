var username = document.getElementById('NameInput')
var useremail = document.getElementById('EmailInput')
var userpassword = document.getElementById('passwordInput')
var btn = document.getElementById('btn')
var warn = document.getElementById('warn')
var warn_exist = document.getElementById('warn-exist')
var Succes = document.getElementById('Succes')


var userbox =[]

let database = localStorage.getItem('AllUsers')
if(database != null){
    userbox=JSON.parse(database)
}

function getInputValues(){
    var infoObject={
        name:username.value,
        email:useremail.value,
        password:userpassword.value
    }

    userbox.push(infoObject)
    localStorage.setItem('AllUsers',JSON.stringify(userbox))
    
    console.log(userbox);
    
}

btn.addEventListener('click',validateInputs)
console.log(localStorage.getItem('AllUsers')); 


function validateInputs(){

    if(username.value ==''||useremail.value ==''||userpassword.value==''){
        console.log('All inputs is required')
        warn.classList.add('display-block')
        warn_exist.classList.remove('display-block')
        Succes.classList.remove('display-block')

    }
    else if (isEmailExist(useremail.value) && isPassCorrect(useremail.value, userpassword.value)) {
        warn.classList.remove('display-block')
        warn_exist.classList.add('display-block')
        Succes.classList.remove('display-block')
    }
    else{
        warn.classList.remove('display-block')
        warn_exist.classList.remove('display-block')
        Succes.classList.add('display-block')
        getInputValues()
    }
}

function isEmailExist(email){
    for(var i=0;i<userbox.length;i++){
        if(email == userbox[i].email){
            return true
        }
    }
        return false
    
}
function isPassCorrect(email, pass) {
    for (var i = 0; i < userbox.length; i++) {
        if (email == userbox[i].email && pass === userbox[i].password) {
            return true;
        }
    }
    return false;
}
// function getUserName() {
//     // Retrieve the AllUsers array from localStorage
//     let database = localStorage.getItem('AllUsers');
//     if (database != null) {
//         // Parse the data to an array of users
//         let userbox = JSON.parse(database);

//         // If there are users, return the name of the first user (or modify as needed)
//         if (userbox.length > 0) {
//             return userbox[0].name; // Returning the name of the first user
//         }
//     }
//     return null; // Return null if no users are found or if AllUsers is empty
// }
// document.getElementById('demoname').innerHTML = `<h1>Hello, ${getUserName()}</h1>`;  // استخدم currentUser.name مباشرة
