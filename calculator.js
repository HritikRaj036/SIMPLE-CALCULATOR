
function update(val) {
    document.getElementById("screen").value += val;
}

function result() {
    document.getElementById("screen").value =
        eval(document.getElementById("screen").value);
}

function reset() {
    document.getElementById("screen").value = '';
}

function backspace() {
    var str = document.getElementById("screen").value;
    document.getElementById("screen").value = str.slice(0, -1);
}

// clear() is a reserved method and should be avoided