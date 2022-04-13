// Code your solutions in this file
const guestNames = ["Guadalupe", "Ollie", "Aki"]
let newCard = []
function writeCards(names, occasion){
    for(let i=0; i< guestNames.length; i++){
        newCard.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    return newCard
}

function countDown(){
    let count = 10
    while(count >= 0){
        console.log(count--)
        ;
    }
}