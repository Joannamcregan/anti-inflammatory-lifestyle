import u from './umbrella.esm.js';

// const normal = u('.normal');
const special = u('.special');
const helpLinks = u('.special-link');
const safetyLink = u('#top-link');
const gotIt = u('#got-it');
const specialNotes = u('.special-note');
const mobileLink = u('#mobile-link');
const mobileNav = u('#mobile-nav');
const mobileClose = u('#mobile-close');
const links = u('.mobile-link');

window.addEventListener("devicemotion", (event) => {
    let motion = `${event.acceleration.x} m/s2 on x-axis, ${event.acceleration.y} m/s2 on y-axis, ${event.acceleration.z} m/s on z-axis`
    if (event.acceleration.x > 15 || event.acceleration.y > 15 || event.acceleration.z > 15){
        showNormal();
    }
});

links.on('click', closeMobileMenu);

gotIt.on('click', ()=>{
    specialNotes.addClass('hidden');
})

helpLinks.on('click', (event)=>{
    showSpecial(event);
    document.getElementById('top-link').addEventListener('click', ()=>{
        showNormal();
    });
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission();
    }    
});

mobileLink.on('click', (event)=>{
    mobileNav.addClass('fadeIn');
    u(event.target).addClass('hidden');
    setTimeout(()=>{
        mobileClose.removeClass('hidden');
    }, 1000)
})

mobileClose.on('click', closeMobileMenu);

function showSpecial(e){
    console.log('showing special');
    special.removeClass('hidden');
    safetyLink.attr('href', '#mood');
}

function showNormal(){
    console.log('showing normal');
    helpLinks.addClass('hidden');
    safetyLink.attr('href', '#top');
    console.log('showing normal')
    special.addClass('hidden');
}

function closeMobileMenu(){
    mobileNav.addClass('fadeOut');
    mobileNav.removeClass('fadeIn');
    mobileClose.addClass('hidden');
    setTimeout(()=>{
        mobileLink.removeClass('hidden');
        mobileNav.removeClass('fadeOut');
        mobileNav.addClass('hidden');
    }, 1000)
}