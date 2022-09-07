'use strict';
// --------------------------Default Parameters -----------------
// const bookings = [];

// const createBooking = function(flightNum, numPassengers=2, price = 200 *numPassengers){
    //Parametrelerin verilme sırası cidden mühim bir mesele,yukarıdaki parametrelerde numPassengeri sonradan tanımlamak istersen before access init. hatası alacaksın.
    //ES5
    // numPassengers = numPassengers  || 1;
    // price  = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123')
// createBooking('LH123',2,900)
// createBooking('LH123',5)
// createBooking('LH123',2)
// console.log(bookings);

// createBooking('LH123',undefined,1000) // If you want to second parameter don't be change. Assign undefined and after that this value take default parameter value. Nice trick

