if (typeof window !== "undefined") {

    const numberOfDrumButtons = document.querySelectorAll('.drum').length
    console.log(numberOfDrumButtons);

    for (let index = 0; index < numberOfDrumButtons; index++) {
        document.querySelectorAll('button')[index].addEventListener('click', function(){

            const buttonInnerHtml = this.innerHTML;
            makeSound(buttonInnerHtml);

            buttonAnimation(buttonInnerHtml);
            
        })
        
    }
    document.addEventListener('keydown', function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    })




    function makeSound(key) {
        switch (key) {
                    case "w":
                        const crash = new Audio("/sounds/crash.mp3");
                        crash.play();
                        break;
    
                    case "a":
                        const bass = new Audio("/sounds/kick-bass.mp3");
                        bass.play();
                        break;
    
                    case "s":
                        const snare = new Audio("/sounds/snare.mp3");
                        snare.play();
                        break;
    
                    case "d":
                        const tom1 = new Audio("/sounds/tom-1.mp3");
                        tom1.play();
                        break;
    
                    case "j":
                        const tom2 = new Audio("/sounds/tom-2.mp3");
                        tom2.play();
                        break;
    
                    case "k":
                        const tom3 = new Audio("/sounds/tom-3.mp3");
                        tom3.play();
                        break;
    
    
                    case "l":
                        const tom4 = new Audio("/sounds/tom-4.mp3");
                        tom4.play();
                        break;
    
                    default: 
    
                }
            }
    
    
        function buttonAnimation(currentkey){
            const activeButton = document.querySelector("." + currentkey);
            activeButton.classList.add("pressed");
    
            setTimeout(function(){
                activeButton.classList.remove("pressed")
            },100);
    
        }


  
}






