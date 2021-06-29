  
const game = {
 title: 'Guess the Number!',
 biggestNum: 100,
 smallestNum: 1,
 secretNum: null,
 playersGuess: null,
 prevGuesses: [],
 
 getGuess: function () {
 

   while (this.secretNum !== this.playersGuess){
    //the players initial guess and text for it
     this.playersGuess = Number(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
     console.log(this.playersGuess)
     //lets the player know that they have aimed to low or high
     if (this.playersGuess > this.secretNum){
       alert('Aim lower')
     } else if (this.playersGuess < this.secretNum) {
       alert('Aim higher')
     }
     
   }//lets the player know when they've won
   if (this.secretNum === this.playersGuess){
     alert(`You've won!`)
     
   }
   return
 },//this function starts the game by picking a random number between 1 & 100
 play: function () { 
   this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
   console.log(this.secretNum)
   game.getGuess()
   
 },
 
 

}//the initializing of the game(happens when the screen loads)
game.play()
// game.getGuess()     