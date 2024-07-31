document.querySelector('.get').addEventListener('click', countDown);

function countDown() {
    setInterval(function () {
        let month = document.querySelector('#month').value;
        let date = document.querySelector('#date').value;
        let year = document.querySelector('#year').value;
        let time = document.querySelector('#time').value;

        let dest = new Date(`${month} ${date}, ${year} ${time}`).getTime();
        let cur = new Date().getTime();
        let diff = dest - cur;

        let day = Math.floor(diff / (1000 * 60 * 60 * 24));

        let hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        let sec = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = day + "<br/>" + "Day";
        document.getElementById("hr").innerHTML = hr + "<br/>" + "Hr";
        document.getElementById("min").innerHTML = min + "<br/>" + "Min";
        document.getElementById("sec").innerHTML = sec + "<br/>" + "Sec";

    }, 1000);
}