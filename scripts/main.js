var MyImage = document.querySelector('img');

MyImage.onclick = function(){
    var MySrc = MyImage.getAttribute('src');
    if(MySrc==='images/social-logo.png'){
        MyImage.setAttribute('src', 'images/герб.jpg');
    } else {
        MyImage.setAttribute('src', 'images/social-logo.png');
    }
}

var MyButton = document.querySelector('button');
var MyHeading = document.querySelector('h1');

function setUsername(){
    var MyName = prompt('Please enter ypur name');
    localStorage.getItem('name',MyName);
    MyHeading.textContent = "Marta is cool and  " + MyName;
}

if (!localStorage.getItem('name')){
    setUsername();
}
else {
    var storedName = localStorage.getItem('name');
    MyHeading.textContent = "Marta is cool and  " + storedName;
}

MyButton.onclick = function(){
    setUsername();
}