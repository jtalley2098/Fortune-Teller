
function ready(){


    

    const audio = document.querySelector('audio');
    document.addEventListener("DOMContentLoaded", () =>{
        audio.play();
    });




const getMessage = document.querySelector('.get-a-message');

getMessage.addEventListener('mouseover', ()=>{
    getMessage.style.backgroundColor = 'aliceblue';
});
getMessage.addEventListener('mouseout', ()=>{
    getMessage.style.backgroundColor = '#999';


});



const randomFortuneArr = 
["You will be eaten by the giant lizard i'm whipping up right now.", 
"Love is in the air...wear the Elmo costume", 
"Stop asking me for shit...I mean damn!", 
"Fortune favors those who eat tacos, it despises those who eat pancakes.", 
"When opportunity fails to answer kick the fucking door in!", 
"That dick head at the grocery store isn't gonna beat himself up!",
"Avoid the chilli. You'll thank me later :/.", 
"Persevere. Soon you will be like Zues on Mt Olympus!", 
"Quit your job, abandon your family, independant people are happy people.",
"You are not your job or how much money you have in the bank.",
"Congratulations! You've been selected to participate in the grand cosmic game of 'Figure It the fuck out'.",
"Life's like a bowl of cosmic cereal... sometimes you find marshmallows, sometimes you find black holes.",
"Just a heads up: Karma's on vacation. Enjoy the chaos.",
"Jesus Christ has no idea who you bitches are.",
"Soon you will be dead.  Bring snacks.",
"When I'm bored I peer out from behind your eyes.",
"Breaking news. I'm naming you center of the fucking universe...narcissist.",
"Don't worry.  Hell is really not that bad.",
"In the vast expanse of eternity, even stars fade into oblivion.",
"Embrace the darkness within, for it mirrors the universe's cold indifference.",
"The universe has a twisted sense of humor: it gives you existential dread as a birthday gift and then watches you scramble for meaning.",
"Extraterrestials are real, they actualy like you, stop freaking out all the time.",
"Go out for a pack of smokes and never come back.",
"Observe how your mind makes meaning of events. This is the  greatest source of your suffering.",
"The U.S. government planned 9/11.  Killing thousands of your own people.  'War makes money.'",
"On holloween you're only getting candy corn.",
"Christmas is a day to worship the (son) on the solstice.  Sun worshiper!",
"Your misfortunes make me smile."];

function generator () {
    let fortune = randomFortuneArr[Math.floor(Math.random()* randomFortuneArr.length)]
        return `${fortune}`;
}
getMessage.addEventListener("click", displayMessage);
const msgElement = document.querySelector('.message');

function displayMessage() {
    const message = generator();
   
    msgElement.textContent = message;
    msgElement.classList.add('visible');
  
    setTimeout(() => {
     
      msgElement.classList.add('hidden');
      msgElement.textContent = message; 
    }, 5000);
      
    msgElement.classList.remove('hidden'); 

};





}


document.addEventListener("DOMContentLoaded", ready);

