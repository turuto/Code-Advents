function countHours(year, holidays) {
    const workingHolidays = holidays.filter(day => {
        const dayFormatted = day.split('/');
        const weekDay = new Date(year, dayFormatted[0]-1, dayFormatted[1]).getDay();
        if ((weekDay > 0) && (weekDay < 6)) {
            return day;
        }
    });
    const extraHours = workingHolidays.length * 2
    return extraHours;
}

const year = 2023
const holidays =  ['01/06',
    '01/01',
    '01/31',
    '04/01',
    '12/25'] // formato MM/DD


console.log( countHours(year, holidays)) //2 dias -