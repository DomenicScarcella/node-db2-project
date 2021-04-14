// STRETCH
const cars = [
    {
        vin: 'JH4DB7540RS001911',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: 'JH4DA9440NS003801',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: 'JH4KA7570NC035422',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
];

// exports.seed = function (knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars);
//         });
// };

exports.seed = async function (knex) {
    await knex('cars').truncate();
    await knex('cars').insert(cars);
};
