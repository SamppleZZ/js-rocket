
var car = {
    make: 'Honda',
    type: 'Civic',
    color: 'blue',
    price: '20€',
    isWorking: '3 days a week',
    isTurnedOn: 'sometimes',
    numberOfWheels: '3',
    seats: [
        'seat 1',
        'seat 2',
        'seat 3',
        'seat 4'
    ],
    turnOn: function () {
        this.isTurnedOn = true;
    },
    fly: function () {
        alert('LENTÄÄÄÄ');
    },
    switchCar: function (isOn) {
        console.log('turn car '+isOn)
        if (isOn == true) {
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    }
    
};
console.log('What are you saying suguru! Thats impossible.. Not impossible for you gojo, who are you to tell someone what is impossible when its possible for you? tell me satoru.. are you the strongest because youre gojo satoru, or are you gojo satoru because youre the strongest?');    