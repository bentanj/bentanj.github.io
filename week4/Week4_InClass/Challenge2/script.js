// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
document.getElementById("justin-btn").addEventListener('mouseover', mouse_over);
document.getElementById("justin-btn").addEventListener("mouseout", mouse_out)

function mouse_over() {
    console.log('IN');
    let result = document.getElementById("result");
    result.innerText = 'Welcome to My Heart';
    result.style.backgroundColor = "pink";
    result.style.color = "blue";
}

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
function mouse_out() {
    console.log('OUT');
    let result = document.getElementById("result");
    result.innerText = "Don't Leave Me Please";
    result.style.backgroundColor = "black";
    result.style.color = "red";
}