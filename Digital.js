
const clockContainer = document.getElementById('span-clock=cont');
const AmPmContainer = document.getElementById('Am-Pm');
AmPmContainer.classList.add('style-am-pm');
const greets = document.getElementById('greeting-cont');
const changbg = document.getElementById('monitor-cont');
changbg.classList.add('bg-style');



const UpdateClock = () => {

    const CurrentDate = new Date();
    let  hours = CurrentDate.getHours();
    let  mins = CurrentDate.getMinutes();
    let seconds = CurrentDate.getSeconds();

    if(hours < 10){

        hours =  '0' +  hours ;
    }
    if(mins < 10){

        mins = '0' + mins;
    }
    if(seconds < 10){
        seconds =  '0' + seconds ;
    }
    if(hours < 12){
        AmPmContainer.innerHTML = 'AM';
    }
    else{
        AmPmContainer.innerHTML = 'PM';
    }
    if (hours < 12) {

        greets.innerText = 'Good Morning Darling';
        changbg.style.backgroundImage = 'url("/img/Scene-19.jpg")';

    } else if (hours >= 12 && hours < 18) {

        greets.innerText = 'Good Afternoon Darling';
        changbg.style.backgroundImage = 'url("/img/sunset_landscape_1006.jpg")';

    } else {

        greets.innerText = 'Good Evening Darling';
        changbg.style.backgroundImage = 'url("/img/j9qi_0xtf_210723.jpg")';
    }
    const FormatTime = `${hours}:${mins}:${seconds}`;
    clockContainer.innerText = `${FormatTime}`;

    requestAnimationFrame(UpdateClock);
}
UpdateClock();


const todaysDateCont = document.getElementById('todays-date');
const TodaysDate = () => {
    const dateToday = new Date();
    let dayOfWeek = dateToday.getDay();
    let month = dateToday.getMonth();
    let dayOfMonth = dateToday.getDate();
    let year = dateToday.getFullYear();

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const today = weekdays[dayOfWeek] + ', ' + months[month] + ' ' + dayOfMonth + ' ' + year;

    todaysDateCont.innerText = today;

    requestAnimationFrame(TodaysDate);
}
TodaysDate();
