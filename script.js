




function ready(){

  function playAudio() {

    const audio = document.querySelector('audio');
    
  
    audio.volume = .2;
  
    audio.play();
     

  
  }
  
  document.addEventListener("click", playAudio);
  
  
  /*document.addEventListener("DOMContentLoaded", ()=>{
    const audio = document.querySelector('audio');
    audio.volume = 0.2;
    audio.play();
   
  });*/

  


const getMessage = document.querySelector('.get-a-message');




getMessage.addEventListener('mouseover', ()=>{
    getMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
});
getMessage.addEventListener('mouseout', ()=>{
    getMessage.style.backgroundColor = 'transparent';


});



const randomFortuneArr = 
["You will be eaten by the giant lizard i'm creating right now.", 
"Love is in the air...wear the Elmo costume", 
"Stop asking me for shit...I mean damn!", 
"Fortune favors those who eat tacos, it despises those who eat pancakes.", 
"When opportunity fails to answer, kick the fucking door in!", 
"That dick head at the grocery store isn't gonna beat himself up!",
"Avoid the chilli. You'll thank me later :/.", 
"Persevere. Soon you will be like Zues on Mt Olympus!", 
"Quit your job, abandon your family, independant people are happy people.",
"You are not your job or how much money you have in the bank.",
"You are in a grand cosmic game of 'Figure it the fuck out'.",
"Life's like a bowl of cosmic cereal..sometimes you find marshmallows, sometimes you find quantum singularities,.",
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
"Observe how your mind makes meaning of events. This is the greatest source of your suffering.",
"The U.S. government planned 9/11 to start a war and steal your rights.",
"On holloween you're only getting candy corn.",
"Your lucky numbers are 666 and 13. Play them together for extra luck.",
"Your misfortunes make me smile.",
"A windfall of money is coming your way! Too bad it will be in Monopoly money.",
"You will soon meet a tall, dark stranger. Please inform the police immediately.",
"A close friend will reveal their deepest secret to you. Make sure to post it on social media.",
"True love is waiting for you! Just as soon as you lower your standards.",
"A journey is in your future. Make sure to bring bail money.",
"Beware of false prophets and trust everything I say.",
"You will soon go on an adventure! Please make sure your life insurance is paid up first.",
"Jealousy and envy follow you. Those hoes are nothing but trouble.",
"True happiness will find you when you least expect it. Not today though. Or tomorrow. Or ever probably.",
"Your leadership skills are being recognized. Time to go down with the ship.",
"Fame and fortune await you soon. Unfortunately infamy and misfortune will get to you first.",
"You have a deep well of untapped potential. Please keep it away from people.",
"You will unlock unlimited power. Please use your new superpowers for evil.",
"You are going to get rabies.",
"A zombie apocalypse is more than likely.",
"There is no evil unless it's in your heart.",
"I know what you did."];

function generator () {
    let fortune = randomFortuneArr[Math.floor(Math.random()* randomFortuneArr.length)]
        return `${fortune}`;
};
getMessage.addEventListener("click", displayMessage);
const msgElement = document.querySelector('.message');


let buttonDisabled = false;

    function displayMessage() {

        buttonDisabled = true;
        //disables getMessage button
        getMessage.disabled = true;
       
        const message = generator();
       
        msgElement.textContent = message;
        msgElement.classList.add('visible');
      
        setTimeout(() => {
         
          msgElement.classList.add('hidden');
          msgElement.textContent = message; 
        }, 11000);
          
        msgElement.classList.remove('hidden'); 
    
        setTimeout(() => {
            getMessage.disabled = false;
            buttonDisabled = false;
          }, 18000);
    };
  

getMessage.addEventListener('click', () => {
    if(!buttonDisabled) {
      displayMessage();
    }
  });

  

}


document.addEventListener("DOMContentLoaded", ready);


