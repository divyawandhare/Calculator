function display(number) {
    document.getElementById('result').value += number;
}

function calculate() {
    try {

        let resvalue = document.getElementById('result').value;
        let final = eval(resvalue);
        document.getElementById('result').value = final;
    }
    catch (error) {
        alert('Enter a Valid String!');
    }
}

function clrscr() {
    document.getElementById('result').value = "";
}
    
function backbtn() {
    let backspace = document.getElementById('result').value;
    let del = backspace.slice(0, -1);
    document.getElementById('result').value = del;
}
