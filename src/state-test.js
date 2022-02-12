let counter = 0;

function incrementCounter() {
    counter = counter + 1
    renderState();
}

function renderState() {
    console.group(counter)
}

setInterval(function () {
    incrementCounter();
}, 1000);

