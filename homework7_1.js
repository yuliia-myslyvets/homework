let dog = {
    name: 'Rex',
    color: 'black',
    age: 3,
    tail: true,
    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

// Викликаємо метод getInfo(), який виводить властивості об'єкта
dog.getInfo();

// Додаємо нову властивість до об'єкта
dog.breed = 'Labrador';

// Викликаємо метод getInfo() знову, щоб перевірити, чи включає нову властивість
dog.getInfo();