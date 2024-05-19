function rollDice() {
   
    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimage = document.getElementById("diceimage");

    const results = [];
    const images = []

    
    for (let i = 0; i < numofdice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        results.push(roll);
        const imagePath = `images_folder/${roll}.png`;
        images.push(`<img src="${imagePath}" alt="dicepic">`);
    }
    
        
    

    diceresult.textContent = `Dice: ${results.join(' , ')}`;
    diceimage.innerHTML = images.join('')
}
