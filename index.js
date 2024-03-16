const randomFortuneArr = 
["You will be eaten by a giant lizard if you go out.  Stay Home!", 
"Love is in the air...yes, I smell bacon too!", 
"Take charge!", 
"Fortune favors those who eat tacos, it despises those who eat pancakes.", 
"When opportunity fails to answer kick the door in!", 
"That dick head at the grocery store isn't gonna beat himself up!",
"Avoid the chilli. You'll thank me later :/.", 
"Persevere. Soon you will be like Zues on Mt Olympus!", 
"Independant people are happy people.",
"You are not your job or how much money you have in the bank!!!!",
"Your psyche has become a prison. The walls are made of fear.",
"You will be visited by a raven who is only just needy."];

function generator () {
    let fortune = randomFortuneArr[Math.floor(Math.random()* randomFortuneArr.length)]
        return `A fortune you:  ${fortune}`;
}

console.log(generator());



