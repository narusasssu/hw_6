let container = document.getElementById('container');


let counter = `
    <div class="chislo">
        <p id="num">0</p>
    </div>
    <div>
    <button id="inc" >Increment</button>
    <button id="dec">Decrement</button>
</div>
`
container.innerHTML = counter

let inc = document.getElementById('inc');
let dec = document.getElementById('dec');

let num = document.getElementById('num');
let integer = 0;

addEventListener('click', function () {
    integer += 0;
    num.innerHTML = integer;

})

inc.addEventListener('click', function () {
    integer += 2;
    num.innerHTML = integer
})
dec.addEventListener('click', function () {
    integer -= 2;
    num.innerHTML = integer
})

