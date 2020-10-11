$(document).ready(function(){
    $('.custom-card').tilt({
        maxTilt: 10,
        glare: true,
        maxGlare: 0.4
    })

    //footer contact us line draw animation
    var controller = new ScrollMagic.Controller();
    var footerScene = new ScrollMagic.Scene({
        triggerElement: '#contact-us-section',
        duration: '100%',
        triggerHook: 0.4
    })
        .setClassToggle('.fresco-footer-st0', 'st66')
        // .addIndicators({
        //     name: 'Shudhu Shudhu',
        //     colorTrigger: 'black',
        //     colorStart: 'green',
        //     colorEnd: 'red'
        // })
        .addTo(controller);
});