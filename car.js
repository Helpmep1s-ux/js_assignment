let Car = {
    brand: 'Porsche',
    model: '911',
    getDetails: function(){                                                 //method inside an object
        console.log(`This car is ${this.brand} ${this.model}`);
    }
}

Car.getDetails();