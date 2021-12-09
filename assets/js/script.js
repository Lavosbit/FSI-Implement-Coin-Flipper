// TODO: Declare any global variables we need

// eep track of the result of the random function

// number of times heads is flipped
    let heads = 0;
// number of times tails is flipped
    let tails = 0;
// percentages of tails and heads flipped
// total # of flips
    const headsCol = document.getElementById('heads')
    const tailsCol = document.getElementById('tails')
    const headsPerCol = document.getElementById('heads-percent')
    const tailsPerCol = document.getElementById('tails-percent')
    
    


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    let flipButton = document.getElementById('flip')
    let clearButton = document.getElementById('clear')
    let total = 0
    let pennyImage = document.querySelector('img');
    let statusMessage = document.querySelector('.message-container')
    

    flipButton.addEventListener('click', function(){
        // Flip Button Click Handler
        //will return either 1 or 0, 1 === heads and 0 === tails
        const randomResult = Math.round(Math.random() * 1) 
        
        
        // TODO: Update image and status message in the DOM
        // aka tails
        if(randomResult === 0){
            // update image
            pennyImage.src = "./assets/images/penny-tails.jpg"
            pennyImage.alt = "A picture of tails on a penny"

            //update status message in dom
            statusMessage.textContent = 'You flipped tails!'
            tails++
            tailsCol.textContent = tails;
            
            console.log('tails', tails);
            console.log('total', total)


        } 
        // aka tails
        else {
            pennyImage.src = "./assets/images/penny-heads.jpg"
            pennyImage.alt = "A picture of heads on a penny"
            statusMessage.textContent = 'You flipped heads!'
            heads++
            // headsCol.textContent = heads;
            
            console.log('heads', heads)
            console.log('total', total)
        }
        tailsPerCol.textContent = Math.round(tails / (heads + tails) * 100) + '%';
        headsPerCol.textContent = Math.round(heads / (heads + tails) * 100) + '%';
    

        
        // TODO: Determine flip outcome


        

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
    })

    clear.addEventListener('click', function(){
        // Clear Button Click Handler
        // TODO: Reset global variables to 0
        heads = 0
        tails = 0
        headsCol.textContent = heads;
        tailsCol.textContent = tails;
        tailsPerCol.textContent = 0 + '%';
        headsPerCol.textContent = 0 + '%';

        statusMessage.textContent = "Let's get rolling!";
        pennyImage.setAttribute('src', "./assets/images/penny-heads.jpg");
        pennyImage.setAttribute('alt', "A picture of heads on a penny")

        // TODO: Update the scoreboard (same logic as in flip button click handler)
    })    

})