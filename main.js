function restart(element){
    var children = element.children;
    element.classList.toggle('chosen', false);
    element.classList.toggle('hvr-pulse-grow', true)
    element.removeAttribute('id');
    while (children.length > 0){
        children[0].parentNode.removeChild(children[0]);
    }
}

function setPoo1(){
    var poo1 = pooCard1.firstChild.firstChild;
    console.log(poo1);
    poo1.classList.toggle('hidden', false);
    pooCard1.classList.toggle('chosen', true);
    starCard.classList.toggle('hvr-pulse-grow', false);
    starCard.removeEventListener('click', setStar);
    pooCard2.classList.toggle('hvr-pulse-grow', false);
    pooCard2.removeEventListener('click', setPoo2);
    if (poo1.className === 'fa fa-star'){
        result.innerHTML = 'You found the star!';
        counter += 3;
    } else {
        result.innerHTML = 'Oh, shit...';
        counter--;
    }
    points.innerHTML = `Points: ${counter}`;
    result.classList.toggle('result-before', false);
    setTimeout(function(){
        starCard.firstChild.firstChild.classList.toggle('hidden', false);
        starCard.firstChild.firstChild.classList.toggle('mini-icons', true);
        pooCard2.firstChild.firstChild.classList.toggle('hidden', false);
        pooCard2.firstChild.firstChild.classList.toggle('mini-icons', true);
    }, 750);
}

function setPoo2(){
    var poo2 = pooCard2.firstChild.firstChild;
    console.log(poo2);
    poo2.classList.toggle('hidden', false);
    pooCard2.classList.toggle('chosen', true);
    starCard.classList.toggle('hvr-pulse-grow', false);
    starCard.removeEventListener('click', setStar);
    pooCard1.classList.toggle('hvr-pulse-grow', false);
    pooCard1.removeEventListener('click', setPoo1);
    if (poo2.className === 'fa fa-star'){
        result.innerHTML = 'You found the star!';
        counter += 3;
    } else {
        result.innerHTML = 'Oh, shit...';
        counter--;
    }
    points.innerHTML = `Points: ${counter}`;
    result.classList.toggle('result-before', false);
    setTimeout(function(){
        starCard.firstChild.firstChild.classList.toggle('hidden', false);
        starCard.firstChild.firstChild.classList.toggle('mini-icons', true);
        pooCard1.firstChild.firstChild.classList.toggle('hidden', false);
        pooCard1.firstChild.firstChild.classList.toggle('mini-icons', true);
    }, 750);
}

function setStar(){
    var star = starCard.firstChild.firstChild;
    console.log(star);
    star.classList.toggle('hidden', false);
    starCard.classList.toggle('chosen', true);
    pooCard1.classList.toggle('hvr-pulse-grow', false);
    pooCard1.removeEventListener('click', setPoo1);
    pooCard2.classList.toggle('hvr-pulse-grow', false);
    pooCard2.removeEventListener('click', setPoo2);
    if (star.className === 'fa fa-star'){
        result.innerHTML = 'You found the star!';
        counter += 3;
    } else {
        result.innerHTML = 'Oh, shit...';
        counter--;
    }
    points.innerHTML = `Points: ${counter}`;
    result.classList.toggle('result-before', false);
    setTimeout(function(){
        pooCard2.firstChild.firstChild.classList.toggle('hidden', false);
        pooCard2.firstChild.firstChild.classList.toggle('mini-icons', true);
        pooCard1.firstChild.firstChild.classList.toggle('hidden', false);
        pooCard1.firstChild.firstChild.classList.toggle('mini-icons', true);
    }, 750);
}

function miniIconsFalse(){
    pooCard1.firstChild.firstChild.classList.toggle('mini-icons', false);
    pooCard2.firstChild.firstChild.classList.toggle('mini-icons', false);
    starCard.firstChild.firstChild.classList.toggle('mini-icons', false);
}

function randomColor(){
    var arrColors = ['#ed564b', '#64B5F6', '#8BC34A', '#FFDB5C', '#F8A055'];
    var random = Math.floor(Math.random()*arrColors.length);

    document.getElementsByClassName('card')[0].style.backgroundColor = arrColors[random];
    document.getElementsByClassName('card')[1].style.backgroundColor = arrColors[random];
    document.getElementsByClassName('card')[2].style.backgroundColor = arrColors[random];

    document.getElementById('btn-restart').style.borderColor = arrColors[random];

}

function play(){    
    var cards = document.getElementsByClassName('card');
    var randomCard = Math.floor(Math.random()*cards.length);

    for (var i = 0; i < cards.length; i++){
        var p = document.createElement('p');
        cards[i].appendChild(p);
        if (i === randomCard){
            var star = document.createElement('i');
            star.className ='fa fa-star hidden';
            star.setAttribute('aria-hidden', 'true');
            cards[randomCard].setAttribute('id', 'star-card');

            cards[randomCard].firstChild.appendChild(star);
        } else {
            var poo = document.createElement('i');
            poo.className = 'fa fa-poo hidden';
            cards[i].className = 'card hvr-pulse-grow poo-card';
            cards[i].removeAttribute('id');

            cards[i].firstChild.appendChild(poo);
        }
    }

}

randomColor();
play();

var points = document.getElementById('points');

var counter = 0;
if (counter >= 5){
    points.classList.toggle('chosen', true);
} else {
    points.classList.toggle('chosen', false);
}

var result = document.getElementById('resultID');

var starCard = document.getElementById('star-card');
var pooCards = document.getElementsByClassName('poo-card');
var pooCard1 = pooCards[0];
var pooCard2 = pooCards[1];
    
function setClicks(){
    starCard.addEventListener('click', setStar);
    pooCard1.addEventListener('click', setPoo1);
    pooCard2.addEventListener('click', setPoo2);
}

setClicks();

var restartButton = document.getElementById('btn-restart');
restartButton.addEventListener('click', function(){
    result.classList.toggle('result-before', true);
    result.innerHTML = 'Click any card';
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++){
        restart(cards[i]);
    }
    randomColor();
    play();
    setClicks();
    miniIconsFalse();
});


