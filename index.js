window.onload = function () {

    //Car ATH
    //The turn signals
    //The left-right action buttons
    const leftArrowButton = document.getElementById("leftArrowButton");
    const rightArrowButton = document.getElementById("rightArrowButton");

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

    

    //End of Car ATH
}




