import u from '/umbrella.esm.js';

const normal = u('.normal');
const special = u('.special');
const helpLinks = u('.special-link');

helpLinks.on('click', (event)=>{
    showSpecial(event)
});

function showSpecial(e){
    normal.addClass('hidden');
    special.removeClass('hidden');
}
