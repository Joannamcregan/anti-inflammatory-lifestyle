import u from './umbrella.esm.js';

const normal = u('.normal');
const special = u('.special');
const helpLinks = u('.special-link');
const safetyLink = u('#top-link');

window.addEventListener("devicemotion", (event) => {
    let motion = `${event.acceleration.x} m/s2 on x-axis, ${event.acceleration.y} m/s2 on y-axis, ${event.acceleration.z} m/s on z-axis`
    document.getElementById('motion').innerText = event.acceleration;
    // if (event.acceleration.x > 3 || event.acceleration.y > 3 || event.acceleration.z){
    //     // showNormal();
    //     document.getElementById('motion').innerText = motion;
    // }
});

safetyLink.on('click', ()=>{
    showNormal();
})
helpLinks.on('click', (event)=>{
    showSpecial(event);
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission();
    }    
}
);

function showSpecial(e){
    normal.addClass('hidden');
    special.removeClass('hidden');
}

function showNormal(e){
    special.addClass('hidden');
    normal.removeClass('hidden');
}