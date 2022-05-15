//   Задание 1:
function Animal(name) {
    var foodAmount = 50;
    var self = this;
    this.name = name;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.feed = function() {
       console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
       return self;
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) {
        return formatFoodAmount();
        }

        if (amount < 50 || amount > 100) {
            throw new Error('Значение должно быть больше 50, однако меньше 100');
        }

        foodAmount = amount;;
        return self;
    }
};

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function() {
        animalFeed.call();
        console.log('Кот доволен ^_^');
        return this;
    }

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    }
};

var cat = new Cat('Barsik');

cat.dailyNorm(60).feed().stroke();

//   Задание 2:
function Animal(name) {
    var foodAmount = 50;
    var self = this;
    this.name = name;
};

Animal.prototype.formatFoodAmount = function() {
    return foodAmount + 'гр.';
};

Animal.prototype.feed = function() {
   console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
   return this;
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) {
    return Animal.prototype.formatFoodAmount();
    }
    if (amount < 50 || amount > 100) {
        throw new Error('Значение должно быть больше 50, однако меньше 100');
    }
    foodAmount = amount;;
    return this;
};

function Cat(name) {
    this.name = name;
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed();
    console.log('Кот доволен ^_^');
    return this;
}

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
}

var cat = new Cat('Barsik');

cat.dailyNorm(70).feed().stroke();
