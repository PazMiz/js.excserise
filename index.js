// <!-- if the hour is between 6 am and 12pm say good morning -->
// <!-- if its between 12pm and 6pm say good afternoon -->
// <!-- other wise say good evening -->
let hour = 10;
if (hour >= 6 && hour < 12)
    console.log('good morning');

else if (hour >= 12 && hour < 18)
    console.log(' good after noon');
else console.log(' good evening');


