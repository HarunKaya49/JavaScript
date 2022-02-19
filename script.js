var name = prompt('Adiniz : ');

var nameLabel = document.getElementById('myName');

nameLabel.innerHTML = name;

function startTime() {
    var time = new Date();
    var day = time.getDay();
    var hours = time.getHours();
    var minute = time.getMinutes();
    var dayName;


    switch (day) {
        case 0: dayName = "Pazar";
            break;
        case 1: dayName = " Pazartesi";
            break;
        case 2: dayName = " Sali";
            break;
        case 3: dayName = " Carsamba";
            break;
        case 4: dayName = " Persembe";
            break;
        case 5: dayName = " Cuma";
            break;
        case 6: dayName = " Cumartesi";
            break;
        default:
            break;
    }


    var myClock = document.getElementById('myClock');
    minute = checkTime(minute);
    hours = checkTime(hours);

    myClock.innerHTML = `${hours}:${minute}  ${dayName}`


    setTimeout(() => {
        startTime();
    }, 500);
}

function checkTime(value) {
    if (value < 10) {
        return "0" + value;
    }
    return value;

}