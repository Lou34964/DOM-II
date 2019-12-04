// Your code goes here
const navBar = document.querySelector('.nav-container');
console.log(navBar);
const logoHeading = document.querySelector('.logo-heading');
console.log(logoHeading);
const logoImg = document.createElement('img');
logoImg.src = "img/busChange.png";
logoImg.style.height = navBar.style.height;

logoHeading.addEventListener('click', () =>{

    logoHeading.textContent = '';
    navBar.prepend(logoImg);

})
logoImg.addEventListener('click', () =>{

    logoImg.remove();
    logoHeading.textContent = 'Fun Bus';

})

const intro = document.querySelector('.intro');
console.log(intro);

intro.addEventListener('mouseover', ()=>{
    intro.style.color = 'Red';
})
intro.addEventListener('mouseleave', ()=>{
    intro.style.color = 'Black';
})

const imgAdv = document.querySelector('section img');
console.log(imgAdv);

imgAdv.addEventListener('dblclick', ()=>{
    if(imgAdv.getAttribute('tag') == "0")
    {
        event.preventDefault();
        imgAdv.style.transform = 'scale(3)';
        imgAdv.setAttribute('tag', "1")
    }
    else
    {
        event.preventDefault();
        imgAdv.style.transform = 'scale(1)';
        imgAdv.setAttribute('tag', "0");
    }
})

const body = document.body;
console.log(body);

body.addEventListener('keydown', ()=>{
    document.documentElement.scrollTop = 0;
})

const allTxt = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a');
console.log(allTxt);

window.addEventListener('resize', ()=>{
    event.preventDefault
    body.style.backgroundColor = "lightgrey";
    allTxt.forEach((el)=>{
        el.style.color = 'darkorange';
    })
})

const btns = document.querySelectorAll('.btn');
console.log(btns);
orgColor = '';
btns.forEach((el)=>{
    el.addEventListener('mousedown', ()=>{
        orgColor = el.style.color;
        el.style.color = 'black';
    })
    el.addEventListener('mouseup', ()=>{
        el.style.color = orgColor;
    })
    el.addEventListener('contextmenu', ()=>{
        alert("'Right Click' is dissabled on this site!");
    })
})
document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    alert("'Right Click' is dissabled on this site!");
},false);

window.addEventListener('load', ()=>{
    console.log("Page Load Complete")
})


window.addEventListener('blur', ()=>{
    alert("Hey dont leave me again. That was scarry. :,(        lol");
})