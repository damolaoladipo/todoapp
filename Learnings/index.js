// console.log("Hello Damola")
// const fs = require('fs');

// console.log('Start reading file.....');
// const data = fs.readFileSync('message.txt', 'utf8');
// const data1 = fs.readFileSync('damola.txt', 'utf8');
// console.log(data, data1);
// console.log('end of program')

// fs.writeFileSync('message.txt', 'My name is Damola Oladipo');
// fs.writeFileSync('damola.txt', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, magni deleniti provident at numquam, a iusto quidem sunt culpa minima necessitatibus, commodi mollitia nostrum non in natus rem odio itaque nihil doloremque harum! Tempora suscipit illum corrupti vel porro mollitia dignissimos quaerat nulla maxime, quas ducimus quod non rem ullam et, consequuntur, esse facilis.');
// fs.writeFileSync('oladipo.txt', '-----------Provident ratione quas fugiat doloremque aperiam dolore magni, eligendi tenetur tempora illo animi iure hic. Placeat, nisi!')
// const data = fs.readFileSync('message.txt', 'utf8');
// const data1 = fs1.readFileSync('damola.txt', 'utf8');
// const data2 = fs2.readFileSync('oladipo.txt', 'utf8');

// using promises to handle async 
 
// let fs = require('fs');

// console.log('Start reading file.....');
// fs.readFile('damola.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// let fs1 = fs.promises;
 
// console.log('Start reading the seocnd file.....');
// fs1.readFile('message.txt', 'utf8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// let fs2 = fs.promises;
// async function readFiles() {
//     try {
//         console.log('Start reading the thrid file.....');
//         const data = await fs2.readFile('oladipo.txt', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// }
// readFiles();

// const age =  17

// if(age<=18) {
//     console.log('Too young to vote')
// } else if (age >=18 && age <=60){
//     console.log('Eligible to vote')
// } else {
//     console.log('You should retire')
// }

// switch statement
// convert the above if condition statement to a switch statement

// const age = 17;

// switch (true) {
//     case (age <= 18):
//         console.log('Too young to vote');
//         break;
//     case (age > 18 && age <= 60):
//         console.log('Eligible to vote');
//         break;
//     default:
//         console.log('You should retire');
//         break;
// }


// const names = ['Tobi', 'Damola', 'Damilola'];
// const lastName = 'Oladipo';
// let fullNames = [];

// // for loop
// for (let i = 0; i < names.length -1; i++) {
//     console.log(i)
//     console.log(names[i]);
// }

// Create a shopping cart system 

const customerName = "Damola"
const cartItems = [
    { name: 'Biscuits', price: 120, quantity: 10 },
    { name: 'Golden Morn', price: 230, quantity: 5 },
    { name: 'Corn Flakes', price: 200, quantity: 8 },
    { name: 'Custard', price: 600, quantity: 3 },
    { name: 'Milo Cereal', price: 280, quantity: 6 },
    { name: 'oats', price: 410, quantity: 4 },
    { name: 'Milk powder', price: 228, quantity: 12 }
];


//Calculate Subtotal
function calculateSubtotal(items) {
    let subtotal = 0;
    for (const item of items) {
        subtotal += item.price * item.quantity;
    }
    return subtotal;
}

// Apply discount
function applyDiscount(subtotal, discountPercentage) {
    const discountAmount = (discountPercentage / 100) * subtotal;
    return subtotal - discountAmount;
}

//Calculate Tax
function calculateTax(discountedTotal, taxRate) {
    const taxAmount = (taxRate / 100) * discountedTotal;
    return discountedTotal + taxAmount;
}

//Calculate Final Total
function calculateTotal(items, discountPercentage, taxRate) {
    const subtotal = calculateSubtotal(items);
    const discountedTotal = applyDiscount(subtotal, discountPercentage);
    const finalTotal = calculateTax(discountedTotal, taxRate);
    return finalTotal;
}

//Test the functions
const discountPercentage = 50; // 50% discount (Black Friday)
const taxRate = 4.5; // 4.5% tax

const finalTotal = calculateTotal(cartItems, discountPercentage, taxRate);

console.log(`The final total cost of the shopping cart for ${customerName} is ₦${finalTotal.toFixed(2)}`);
