document.querySelector('#start').addEventListener('click', () => {
    let userDate = document.querySelector('#date_of_birth').value;
    let day = moment(userDate, ['DD.MM', 'MM.DD', 'DD.MM.YYYY', 'DD'])

    if (userDate == '' || !day.isValid()) {
        alert('Invalid date');
        document.querySelector('#date_of_birth').value = '';
        return false
    }
    day.add(20, 'Y');
    let out = '';
    switch (day.day()) {
        case 1:
            out = 'Monday';
            break;
        case 2:
            out = 'Tuesday';
            break;
        case 3:
            out = 'Wednesday';
            break;
        case 4:
            out = 'Thursday';
            break;
        case 5:
            out = 'Friday';
            break;
        case 6:
            out = 'Saturday';
            break;
        case 0:
            out = 'Sunday';
            break;
    }
    document.querySelector('#out').textContent = 'А day after twenty years is ' + out;
})
