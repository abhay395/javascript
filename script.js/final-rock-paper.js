let score =JSON.parse(localStorage.getItem('score'));//local storage foramate to gate a varibae first we change it's string into a objects
if (score===null) {// if score=null, then  '!score is change into true
 score={
     win:0,
     losses:0,
     tie:0
 };
};// and i can change if else into a let score =JSON.parse(localStorage.getItem('score'))||score={ win:0,losses:0,tie:0}
 updatescore();
 // document.querySelector('.js-result').innerHTML=`${result}`



 function playgame(playermove) {
  computerMove= picCoputermove();
 let result='';
 if(playermove === 'Rock'){
   if(computerMove ==='Rock'){
      result = 'Tie';
 }else if (computerMove === 'Paper'){
         result='You lose';
 }else if (computerMove === 'Scissors'){
         result='You win';
 }

} else if (playermove === 'Paper'){
     if(computerMove === 'Rock'){
    result='You win';
}else if (computerMove==='Paper'){
    result='Tie';
}else if (computerMove==='Scissors'){
    result='You lose';
}
 } else if (playermove === 'Scissors'){
     if(computerMove === 'Rock'){
    result='You lose';
}else if (computerMove === 'Paper'){
    result='You win';
}else if (computerMove==='Scissors'){
    result='Tie';
} 
 }
 if(result==='You win'){
     score.win++;
 }else if (result==='You lose'){
     score.losses++;
 }else if (result==='Tie'){
     score.tie++;
 }
 localStorage.setItem('score',JSON.stringify(score));//local storage formate for save the variable 
 updatescore();
 document.querySelector('.js-result').innerHTML=`${result}`;
 document.querySelector('.js-move').innerHTML=` You <img class="move-icon" src="${playermove}-emoji.png" alt="">
 <img class="move-icon" src="${computerMove}-emoji.png" alt="">computer`
 
 // alert(`your move is ${playermove} computerpic is ${computerMove} ,${result} 
 // Win:${score.win} Losses:${score.losses} Tie:${score.tie}`);

}


function updatescore() {
     document.querySelector('.js-score')
 .innerHTML=  `Win:${score.win} Losses:${score.losses} Tie:${score.tie}`;
 };

 function picCoputermove(){
     let randomnumber=Math.random();//its iner because it's value change every time 
     let computerMove='';        
     if (randomnumber>0 && randomnumber<1/3) {
 computerMove='Rock';
} else if(randomnumber>1/3&&randomnumber<2/3){
    computerMove='Paper';
}else if(randomnumber>2/3 &&randomnumber<1){
    computerMove='Scissors';
}
return computerMove;
 }