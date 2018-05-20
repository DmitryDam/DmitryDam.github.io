const products = {
  bread:10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};
const order = { bread: 2, milk: 2, apples: 1, cheese: 1 };

function Cashier(name, products) {
    this.name = name;
    this.products = products;
       // - name - строка, имя, передается при вызове конструктора
       // - products - объект база данных продуктов, передается при вызове конструктора
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;

    this.countTotalPrice = function(order) {
        for (const key in order) {
            if (products.hasOwnProperty(key)) {
                let amount = products[key] * order[key];
                console.log( key+":" +" Цена в магазине-" + products[key]);
                console.log("Заказано шт.-" + order[key]);
                this.totalPrice += amount;
            }
        }
        console.log(`Сумма к оплате : ${this.totalPrice}`);
    };
    this.getCustomerMoney = function() {
        let pay
        do {
        pay = prompt(
          `Сумма к оплате ${this.totalPrice}грн. Внесите деньги`,`${this.totalPrice}`);
            if (pay === null) {
            this.customerMoney = null;
            break;
              }
           } while ((isNaN(pay)||pay < this.totalPrice));
            this.customerMoney = pay;
     };
    this.countChange = function() {
           this.changeAmount = this.customerMoney - this.totalPrice; 
    };
    this.reset = function() {
      this.totalPrice = 0;
      this.customerMoney = 0;
      this.changeAmount = 0;
    };
    this.serve = function(order) {
        const entriesProd = Object.entries(products);
        for (const entry of entriesProd) {
        const [ key, value ] = entry;
        console.log(`Товар: ${key}: цена: ${value}`)
        }
        const entriesOrder = Object.entries(order);
        for (const entry of entriesOrder) {
        const [ key, value ] = entry;
        console.log(`Заказ покупателя: ${key}: цена: ${value}`)
        }
      this.countTotalPrice(order);
      this.getCustomerMoney();
      this.countChange();
      if (!this.customerMoney) {
        alert(`Очень жаль, что-то пошло не так, приходите еще`);
      } else {
        alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
      }
      this.reset();
    };
}
const cashier = new Cashier("Mango-cashier",products);
cashier.serve(order);