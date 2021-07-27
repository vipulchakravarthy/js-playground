function calculateDaysBetweenDates(start, end) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var days = [];
    var currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        days.push(currentDate.getDate());
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    }
    return days;
}


//generate primes
function generatePrimes(max) {
    var primes = [];
    var i = 2;
    while (i <= max) {
        var isPrime = true;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        i++;
    }
    return primes;
}

//addEventListener event
function addEventListener(element, event, handler) {
    if (element.addEventListener) {
        element.addEventListener(event, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + event, handler);
    }
}