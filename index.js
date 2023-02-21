document.addEventListener("DOMContentLoaded", function(event) { 

    //Car ATH
    //The car action buttons
    //The car signals
    const leftArrowButton = document.getElementById("leftArrowButton");
    const rightArrowButton = document.getElementById("rightArrowButton");
    const warningButton = document.getElementById("warningSignal");
    const lightButton = document.getElementById("lightSignal");
    const engineButton = document.getElementById("engineSignal");
    const seatButton = document.getElementById("seatSignal");

    //car speedometer
    const speedUpButton = document.getElementById("speedUp");
    const speedDownButton = document.getElementById("speedDown");

    //Gazoline
    const gazolineUpButton = document.getElementById("gazolineUp");
    const gazolineDownButton = document.getElementById("gazolineDown");

    //Gearbox
    const gearboxUpButton = document.getElementById("gearboxUp");
    const gearboxDownButton = document.getElementById("gearboxDown");





    //general variables

    //speed variable
    var speed = 0;
    //gazoline variable
    var lvlGazoline = 0;
    //Gearbox variable
    var lvlGearbox = 0;
    //Warning variable
    var warningOnOff = false;




    
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
            }else if(attr === "#B7B4B5;#42CA68;#42CA68;#B7B4B5;" && warningOnOff == true){
                leftArrowAnimate.setAttribute('values', '#B7B4B5;#42CA68;#42CA68;#B7B4B5;');
                rightArrowAnimate.setAttribute('values', '#B7B4B5');
                warningOnOff = false;

            }else{
                leftArrowAnimate.setAttribute('values', '#B7B4B5');
            }
        }else{
            //shutdown the second turn signal
            leftArrowAnimate.setAttribute('values', '#B7B4B5');
            
            //Switch on/off
            var attr = rightArrowAnimate.getAttribute('values');
            if (attr === "#B7B4B5") {
                rightArrowAnimate.setAttribute('values', '#B7B4B5;#42CA68;#42CA68;#B7B4B5;');
            }else if(attr === "#B7B4B5;#42CA68;#42CA68;#B7B4B5;" && warningOnOff == true){
                rightArrowAnimate.setAttribute('values', '#B7B4B5;#42CA68;#42CA68;#B7B4B5;');
                leftArrowAnimate.setAttribute('values', '#B7B4B5');
                warningOnOff = false;
            } else {
                rightArrowAnimate.setAttribute('values', '#B7B4B5');
            }
        }
    }

    leftArrowButton.addEventListener('click', clignotte);
    rightArrowButton.addEventListener('click', clignotte);


    //Warnings signal
    function warning(){

        var attrL = leftArrowAnimate.getAttribute('values');
        var attrR = rightArrowAnimate.getAttribute('values');
            if (attrL === "#B7B4B5" || attrR === "#B7B4B5" ) {
                leftArrowAnimate.setAttribute('values', '#B7B4B5;#42CA68;#42CA68;#B7B4B5;');
                rightArrowAnimate.setAttribute('values', '#B7B4B5;#42CA68;#42CA68;#B7B4B5;');
                warningOnOff = true;
            } else {
                leftArrowAnimate.setAttribute('values', '#B7B4B5');
                rightArrowAnimate.setAttribute('values', '#B7B4B5');
                warningOnOff = false;
            }
    }

    warningButton.addEventListener('click', warning);


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




    //Car speed up or speed down
    const containerSpeed = document.querySelector('.container-speed p');
    containerSpeed.innerHTML = speed;
    
    speedUpButton.addEventListener('click', function(){
        speed++;
        containerSpeed.textContent = speed;
    });
    
    speedDownButton.addEventListener('click', function(){
        if(speed >= 1 ){
            speed--;
            containerSpeed.textContent = speed;
        }
    });


    //The level of gasoline
    const containerGazoline = document.querySelector('.container-img-pourcent p');
    containerGazoline.innerHTML = lvlGazoline + '%';

    gazolineUpButton.addEventListener('click', function(){
        if(lvlGazoline < 100){
            lvlGazoline++;
            containerGazoline.textContent = lvlGazoline + '%';
        }
    });

    gazolineDownButton.addEventListener('click', function(){
        if(lvlGazoline >= 1){
            lvlGazoline--;
            containerGazoline.textContent = lvlGazoline + '%';
        }
    });


    //The gearbox
    const containerGearbox = document.querySelector('.container-info-lever-gear p');
    containerGearbox.innerHTML = lvlGearbox;

    gearboxUpButton.addEventListener('click', function(){
        lvlGearbox++;
        containerGearbox.textContent = lvlGearbox;
    });
    
    gearboxDownButton.addEventListener('click', function(){
        if(lvlGearbox >= 1){
            lvlGearbox--;
            containerGearbox.textContent = lvlGearbox;
        }
    });


    


    //End of Car ATH
});





