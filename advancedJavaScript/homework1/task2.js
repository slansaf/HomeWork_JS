const chefs = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);


const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

const orders = new Map();

const clientAlexey = { name: 'Алексей' };
const clientMaria = { name: 'Мария' };
const clientIrina = { name: 'Ирина' };

orders.set(clientAlexey, ['Пицца "Пепперони"', 'Тирамису']);
orders.set(clientMaria, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
orders.set(clientIrina, ['Чизкейк']);

function displayOrders() {
    for (const [client, orderedDishes] of orders) {
        console.log(`${client.name} заказал:`);
        orderedDishes.forEach(dish => {
            const chef = dishes.get(dish); 
            console.log(`- ${dish} (готовит: ${chef})`);
        });
        console.log(''); 
    }
}

displayOrders();
