var btnlogout = document.getElementById('btnlogout');

btnlogout.addEventListener('click',function(){
    window.location ='./index.html'
})

function displayItem() {
   
        document.getElementById('demo').innerHTML = `<h1>Hello, Guest!</h1>`;
        console.log("No user logged in");
    
}

displayItem();
