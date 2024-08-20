// console.error("this is an erorr");
// console.warn("this is a warning")


const person = {
    firstName: "John",
    lastName:"Seamsons",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
}

const { firstName,  lastName, age, address: {street, city} } = person;
