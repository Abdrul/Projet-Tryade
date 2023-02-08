document.addEventListener("DOMContentLoaded", function(event) { 

    //Car ATH
    //The car action buttons
    const leftArrowButton = document.getElementById("leftArrowButton");
    const rightArrowButton = document.getElementById("rightArrowButton");
    const lightButton = document.getElementById("lightSignal");
    const engineButton = document.getElementById("engineSignal");
    const seatButton = document.getElementById("seatSignal");
    
    //The turn signals
    //The animate tags of the left-right directional arrows
    const rightArrowAnimate = document.getElementById('right-arrow-animate');
    const leftArrowAnimate = document.getElementById('left-arrow-animate');


    function clignotte() {
        value = this.getAttribute('value');
        if (value === "left") {
            //shutdown the second turn signal
            rightArrowAnimate.setAttribute('values', '#B7B4B5');

            //Switch on/off
            var attr = leftArrowAnimate.getAttribute('values');
            if (attr === "#B7B4B5") {
                leftArrowAnimate.setAttribute('values', '#B7B4B5;#42CA68;#42CA68;#B7B4B5;');
            } else {
                leftArrowAnimate.setAttribute('values', '#B7B4B5');
            }
        } else {
            //shutdown the second turn signal
            leftArrowAnimate.setAttribute('values', '#B7B4B5');
            
            //Switch on/off
            var attr = rightArrowAnimate.getAttribute('values');
            if (attr === "#B7B4B5") {
                rightArrowAnimate.setAttribute('values', '#B7B4B5;#42CA68;#42CA68;#B7B4B5;');
            } else {
                rightArrowAnimate.setAttribute('values', '#B7B4B5');
            }
        }
    }

    leftArrowButton.addEventListener('click', clignotte);
    rightArrowButton.addEventListener('click', clignotte);



    //The light, engine and seat signals
    function onOff(){
        value = this.getAttribute('value');
        value = value + '-signal';

        children = document.getElementById(value).children;

        if(children[0].getAttribute('fill') === '#B7B4B5'){
            for(i=0;i<children.length;i++){
                children[i].setAttribute('fill','#42CA68')
            }
        }else{
            for(i=0;i<children.length;i++){
                children[i].setAttribute('fill','#B7B4B5')
            }
        }
    }

    lightButton.addEventListener('click', onOff);
    engineButton.addEventListener('click', onOff);
    seatButton.addEventListener('click', onOff);



    //End of Car ATH
});





