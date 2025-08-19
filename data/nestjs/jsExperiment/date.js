
function update() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes().toString().padStart(2, '0');
    let seconds = today.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    console.log(hours + ":" + minutes + ":" + seconds +" "+ ampm);
}

setInterval(update, 1000);