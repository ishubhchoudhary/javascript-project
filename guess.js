"use strict";

window.addEventListener("load", function(){
    var guessNumber = parseInt(Math.random() * 20) + 1;
    console.log(guessNumber);

    let alive = 20 - 1;
    let highNumber = 0;

    let back = document.querySelector('.back');
    let btn = document.querySelector('#btn')
    let questionMark = document.querySelector('.questionMark');
    let start_guessing =document.querySelector('.start_guessing');
    let point = document.querySelector('.point');


    btn.addEventListener("click", function () {
    let inputBox = document.querySelector('.inputBox').value;
    // alert(inputBox);


    if (inputBox < guessNumber) {
    start_guessing.innerHTML = 'Number is too Low...';
    point.textContent = alive;
    alive--;


    }else if(inputBox > guessNumber){
    start_guessing.innerHTML = 'Number is too High...';
    point.textContent = alive;
    alive--;

	}else if(inputBox == guessNumber ){
    start_guessing.innerHTML = 'Congratulation!! You Won!! Again next level';
    questionMark.textContent = inputBox;
    back.style.backgroundColor = "green";
    point.textContent = alive;
    highScore.textContent =  (alive) ;
    btn.disabled = true;
    alive++;


	}
       
    });

    let highScore = document.querySelector('.highScore');
    let again = document.querySelector('.again');
    again.addEventListener('click', function(){
    let inputBox = document.querySelector('.inputBox').value = '';
    start_guessing.innerHTML = 'Start guessing...';
    back.style.backgroundColor = "lightblue";
    questionMark.innerHTML = '?';
    btn.disabled = false;
    guessNumber = parseInt(Math.random() * 20) + 1;


    })
});


