function leapyear(year) {
    var reminder = year % 4
    if (reminder === 0) {
        console.log('your year is leapyear',year);
    }
    else {
        console.log('your year not leapyer',year)
    }
    
}
leapyear(1960)