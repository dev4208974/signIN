let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = Document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    namefield.computedStyleMap.maxheight='0';
    title.innerHTML = 'Sign In'; 
    text.innerHTML = 'lost ptranslate(password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.Style.transform = 'translateX(35px)';
});
signUpBtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '60px';
    title,innerHTML = 'sign Up';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = '0';
})