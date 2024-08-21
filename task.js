// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая 
// итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.
//  Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: 
// Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
    { title: "The Best", artist: "Depesh Mode", year: "1989" },
    { title: "Smoke on the Water", artist: "Deep Purple", year: "1991" },
    { title: "Album 1", artist: "A-ha", year: "1995" },
    { title: "Album 2", artist: "Wham!", year: "1984" },
    { title: "The Very Best", artist: "AC/DC", year: "1993" },
];

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? { value: musicCollection[this.current++], done: false } : { done: true };
        }
    }
}

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}


// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.
// Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. 
// В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const cooksSpecialization = new Map([
    ['Пицца', 'Виктор'],
    ['Суши', 'Ольга'],
    ['Десерты', 'Дмитрий']
]);


const pizza = new Map();
pizza.set("Маргарита", "Пицца")
        .set("Пепперони", "Пицца");

const sushi = new Map();
sushi.set("Филадельфия", "Суши")
        .set("Калифорния","Суши");

const dessert = new Map();
dessert.set("Тирамису", "Десерты")
        .set("Чизкейк", "Десерты");

const customer = [
    {
        name: "Алексей",
    },
    {
        name: "Мария",
    },
    {
        name: "Ирина",
    }
]

const customerOrders = new Map();
customerOrders.set(customer[0], ['Пицца "Пепперони"', "Тирамису"])
        .set(customer[1], ['Суши "Калифорния"', 'Пицца "Маргарита"'])
        .set(customer[2], ["Чизкейк"]);


cooksSpecialization.forEach((value, key, map) => {
    console.log(`${value} - специализация: ${key}`);
});

pizza.forEach((value, key, map) => {
    console.log(`${value} "${key}" - повар: ${cooksSpecialization.get(value)}`);
});

sushi.forEach((value, key, map) => {
    console.log(`${value} "${key}" - повар: ${cooksSpecialization.get(value)}`);
});

dessert.forEach((value, key, map) => {
    console.log(`${value} "${key}" - повар: ${cooksSpecialization.get(value)}`);
});

customerOrders.forEach((value, key, map) => {
    let dish = '';
    for (let i = 0; i < value.length; i++) {
            if (value[i] == value[value.length - 1]) {
                dish += value[i];  
            } else {
                dish += value[i] + " и ";
            }
        }
    console.log(`Клиент ${key.name} заказал: ${dish}`);
});