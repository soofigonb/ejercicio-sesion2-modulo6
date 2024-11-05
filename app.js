const { faker } = require('@faker-js/faker'); 
const { z } = require('zod');


//faker
function generateFakeUser() {
    const user = {
        id: faker.string.uuid(), // Generado con Faker
        name: faker.person.fullName(), // Generado con Faker
        email: faker.internet.email(), // Generado con Faker
        address: {
            street: faker.location.street(), // Generado con Faker
            city: faker.location.city(), // Generado con Faker
            country: faker.location.country(), // Generado con Faker
        },
        phone: faker.phone.number(), // Generado con Faker
    };

    // Mostrar datos generados con Faker
    console.log('Datos generados con Faker:', user);
    
    return user;
}

//zod
const userSchema = z.object({
    id: z.string(), // Validado con Zod
    name: z.string(), // Validado con Zod
    email: z.string().email(), // Validado con Zod
    address: z.object({
        street: z.string(), // Validado con Zod
        city: z.string(), // Validado con Zod
        country: z.string(), // Validado con Zod
    }),
    phone: z.string(), // Validado con Zod
});

// Generar varios usuarios y validarlos
const users = Array.from({ length: 5 }, generateFakeUser);

users.forEach((user, index) => {
    const validationResult = userSchema.safeParse(user);
    if (validationResult.success) {
        console.log(`User ${index + 1} is valid:`, user);
    } else {
        console.error(`User ${index + 1} is invalid:`, validationResult.error);
    }
});


