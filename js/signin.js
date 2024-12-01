var useremail = document.getElementById('EmailInput')
var userpassword = document.getElementById('passwordInput')
var btn = document.getElementById('btn')
var warn = document.getElementById('warn')
var warn_incorrect = document.getElementById('warn-incorrect')
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
    localStorage.setItem('AllUsers', JSON.stringify(userbox));

    // حفظ المستخدم الحالي في `localStorage`
    localStorage.setItem('currentUser', JSON.stringify(infoObject));
    
    console.log(userbox);
    
}

btn.addEventListener('click',validateInputs)

function validateInputs(){

    if(useremail.value ==''||userpassword.value==''){
        console.log('All inputs is required')
        warn.classList.add('display-block')
        warn_incorrect.classList.remove('display-block')

    }
    else if(isEmailExist(useremail.value)){
      window.location='./home.html'
      localStorage.setItem('currentUser', JSON.stringify(getUserByEmail(useremail.value)));

      
    }
    else{
        warn.classList.remove('display-block')
        warn_incorrect.classList.add('display-block')
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