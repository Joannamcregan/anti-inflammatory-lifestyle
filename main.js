import u from '/umbrella.esm.js';

const normal = u('.normal');
const special = u('.special');
const helpLinks = u('.special-link');
const safetyLink = u('#emergency');

window.addEventListener("devicemotion", (event) => {
  console.log(`${event.acceleration.x} m/s2`);
});

safetyLink.on('click', ()=>{
    showNormal()
})
helpLinks.on('click', (event)=>{
    showSpecial(event)
});

function showSpecial(e){
    normal.addClass('hidden');
    special.removeClass('hidden');
}

function showNormal(e){
    special.addClass('hidden');
    normal.removeClass('hidden');
}