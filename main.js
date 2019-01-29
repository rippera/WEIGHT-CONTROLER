let inputBtn = document.getElementById('inpNumber');

function getGrams() {
    // let lbs = event.target.value;
    let inputValue = document.getElementById('inpNumber').value;
    // let lbs = inputValue;
    let gr = document.getElementById("grOutput");
    let kg = document.getElementById("kgOutput");
    let t = document.getElementById("tOutput");

    gr.innerHTML = inputValue  /  0.001;
    kg.innerHTML = inputValue  /  1 ;
    t.innerHTML  = inputValue  / 1000 ;
}
inputBtn.addEventListener('input',function (e) {
    getGrams();
})