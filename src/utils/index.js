export const calculatePrice = items => {
    return `$${items
    .reduce((acc, items) => acc + items.quantity * items.price, 0)
    .toFixed(2)}`
}