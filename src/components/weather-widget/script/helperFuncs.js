function getDayName(dateStr, locale) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
};

function daysInMonth(monthValue) {
    const thirtyDaysArr = [4, 6, 9, 11];
    const thirtyOneDaysArr = [1, 3, 5, 7, 8, 10, 12];

    if (monthValue === 2) {
        return 28;
    } else {
        thirtyDaysArr.forEach((el) => {
            if(monthValue===el) return 30;
        });
        thirtyOneDaysArr.forEach((el) => {
            if(monthValue===el) return 31;
        });
    };
};

export {getDayName, daysInMonth};