
class Beat {
    constructor(audioSrc){
        this.audio= new Audio(audioSrc);
      
    }
}
    play = () => {
        this.audio.currentTime = 0;
        this.audio.play
    }



class Button {
    constructor(color, keyCode) {
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        console.log(this.element);
        this.setButtonColorInHTML
    }

setAnTransitionEndListener = () => {
    this.element.addEventListener('transitioned', () => {
        console.log("transition ended");
        this.deselect();
    })
}

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color
    }

    
    select = () => {
        this.element.style.background = this.color
        this.element.style.boxShadow = `0px 0x 17px 0px ${this.color}`
    }

    
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = "none";
    }
}