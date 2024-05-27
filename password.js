const character = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","&","*","!"];
const password = document.querySelector(".password")
const btn = document.querySelector("#btn")

function getRandomNumber(){
    return Math.floor(Math.random() * character.length)
}

btn.addEventListener("click", ()=> {
    let strongPassword = " ";
    for(i = 0; i < 8;i++){
        strongPassword += character[getRandomNumber()]
    }
    // password.style.backgroundColor = "white";
    password.style.color = "green";
    password.textContent = strongPassword
    password.style.fontFamily = "sanSerif"
})