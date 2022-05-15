// Задание 2:

function Cat() {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.'
    }

    this.feed = function() {
       return console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.')
    }
}

var cat = new Cat();

cat.feed();

// Задание 3:

function Cat() {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.'
    }

    this.feed = function() {
       return console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.')
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) {
        return formatFoodAmount();
        }

        if (amount < 50) {
            throw new Error('Значение должно быть больше 50');
        }

        if (amount > 100) {
            throw new Error('Значение должно быть меньше 100');
        }

        foodAmount = amount;
    }
}

var cat = new Cat();

cat.dailyNorm(70);
cat.feed()
