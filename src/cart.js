/**
 * 
 * @typedef LineItem 
 * @property {string} id
 * @property {string} title
 * @property {number} qty
 * @property {number} price
 */

/**
 * Mendapatkan total harga cart
 * @param {Array<LineItem>} lineItems
 * @returns {number} 
 */
function total(lineItems) {
    return lineItems.reduce(function (accumulation, item) {
        return accumulation + (item.qty * item.price)
    }, 0)
}

module.exports = {
    total: total
}