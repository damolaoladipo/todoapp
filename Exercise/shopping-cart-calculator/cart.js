
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
