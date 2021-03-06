// ===================== ADDITIONAL ========================== //
// // == task-1 == //
// Написати метод every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки) Цей метод повертає true якщо кожен елемент масиву пройшов перевірку з callback. Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву

// every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
// every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)

// // == task-2 == //
// Написати метод some який приймає масив і ф-ю callback. Цей метод поверне true якщо хоча б один елемент масиву пройже перевірку з callback callback приймає елемент масиву

// some([1,2,3,23,5], callback) // true (перевіряємо чи елементи > 10)
// some([12,45,67,34], callback) // false (перевіряємо чи елементи < 10)

// // == task-3 == //
// Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false

// compact([1,0,'', null, 'Hello']) // [1,'Hello']

// // == task-4 == //
// Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.

// Якщо прогрес доставки 100 показувати строку "Done"

// Якщо прогрес доставки < 100 показувати строку "In progress"

// Якщо прогрес доставки null показувати строку "Ready for delivery"

// const ordersA = [
// { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
// { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
// { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// ]

// const ordersB = [
// { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
// { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// ]

// showDeliveryStatus(ordersA) // "In Progress", "Done", "Ready for delivery"
// showDeliveryStatus(ordersB) // "In progress", "Not Ordered", "Ready for delivery"

