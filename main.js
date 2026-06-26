import u from './umbrella.esm.js';

const normal = u('.normal');
const special = u('.special');
const helpLinks = u('.special-link');
const safetyLink = u('#emergency');

window.addEventListener("devicemotion", (event) => {
    let motion = `${event.acceleration.x} m/s2`
    console.log(motion);
    document.getElementById('motion').innerText = motion;
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