const img = document.querySelector('.img');
const text = document.querySelector('.text');

function max(){
    img.style.width = '70%';
    text.style.visibility = 'visible';
    img.style.borderRadius = '20px';
}
function min(){
    img.style.width = '40%';
    text.style.visibility = 'hidden';
    img.style.borderRadius = '0px';
}