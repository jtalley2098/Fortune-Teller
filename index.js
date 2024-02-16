const randomFortuneArr = ["You will be eaten by a giant lizard if you go out.  Stay Home!", "Love is in the air. Just sit back and embrace it.", "You're frineds are cowards. Do not follow them. Take charge!", 
"Fortune favors those who eat tacos.", "When opportunity fails to answer. Kick the door in!", "That dick head at the grocery store isn't gonna beat himself up!",
"Avoid the chilli. You'll thank me later :/.", "Persevere. Soon you will be like Zues on Mt Olympus!"];

function generator () {
    const fortune = randomFortuneArr[Math.floor(Math.random()* randomFortuneArr.length)]
        return `A fortune you:  ${fortune}`;
}

console.log(generator());



