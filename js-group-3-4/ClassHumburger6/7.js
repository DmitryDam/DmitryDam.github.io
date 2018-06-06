class Hamburger {
  constructor(size,stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
 // Добавить topping к гамбургеру. Можно добавить несколько
 //   * topping, при условии, что они разные.
  addTopping(topping) {
    !this.toppings.includes(topping) ? this.toppings.push(topping) : this.toppings;
    return this.toppings[this.toppings.length-1];
  }
  // Убрать topping 
  removeTopping(topping) {
    this.toppings=this.toppings.filter(el=>el!==topping)
    return topping
  }
   // * Получить список toppings
  getToppings() {
    return this.toppings;
  }
   // * Узнать размер гамбургера
  getSize() {
    return this.size;
  }
   // * Узнать начинку гамбургера
  getStuffing() {
    return this.stuffing;
  }
  // calculating price of hamburger
  calculatePrice() {
    const price = Hamburger.SIZES[this.size].price +
      Hamburger.STUFFINGS[this.stuffing].price +
      this.toppings.reduce((acc, item) => acc + Hamburger.TOPPINGS[item].price, 0);
      return price;
  }
  // get calories of hamburder
  calculateCalories() {
    const caloriesAmount = Hamburger.SIZES[this.size].calories +
      Hamburger.STUFFINGS[this.stuffing].calories +
      this.toppings.reduce((acc, item) => acc + Hamburger.TOPPINGS[item].calories, 0);
      return caloriesAmount;
  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

const hamburger = new Hamburger(
Hamburger.SIZE_LARGE,
Hamburger.STUFFING_MEAT
);

console.log('Добавить topping к гамбургеру. ', hamburger.addTopping(Hamburger.TOPPING_SPICE));
console.log('Добавить topping к гамбургеру. ', hamburger.addTopping(Hamburger.TOPPING_SAUCE));
console.log('Cписок toppings: ', hamburger.getToppings());
console.log('Убрать topping:', hamburger.removeTopping(Hamburger.TOPPING_SPICE));
console.log('Узнать размер гамбургера: ', hamburger.getSize());
console.log('Узнать начинку гамбургера: ', hamburger.getStuffing());
console.log('Узнать цену гамбургера ', hamburger.calculatePrice());
console.log('Узнать калорийность гамбургера ', hamburger.calculateCalories());
console.log('Количество toppings ', hamburger.getToppings().length);

// Маленький гамбургер с начинкой из сыра
const hamburgerOrder = new Hamburger(
Hamburger.SIZE_SMALL,
Hamburger.STUFFING_CHEESE
);

console.log('-----------------------------')
console.log('*** НАЧИНАЕМ ДЕЛАТЬ ЗАКАЗ ***')
console.log('-----------------------------')
console.log('Добавка из приправы.', hamburgerOrder.addTopping(Hamburger.TOPPING_SPICE));
console.log('Спросим сколько там калорий', hamburgerOrder.calculateCalories());
console.log('Сколько стоит? ', hamburgerOrder.calculatePrice());
console.log('Я тут передумал и решил добавить еще соус', hamburgerOrder.addTopping(Hamburger.TOPPING_SAUCE));
console.log('А сколько теперь стоит? ', hamburgerOrder.calculatePrice());
console.log('Узнать размер гамбургера: ', hamburgerOrder.getSize()=== Hamburger.SIZE_LARGE);
console.log('Убрать добавку:', hamburgerOrder.removeTopping(Hamburger.TOPPING_SPICE));
console.log('Смотрим сколько добавок: ', hamburger.getToppings().length);


