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

/**
 * Adding item to list
 * @param {Array<LineItem>} lineItems 
 * @param {LineItem} addedLineItem 
 * @returns {Array<LineItem>}
 */
function addItem(lineItems, addedLineItem) {
    const foundLineItem = lineItems.find(function (item) {
        return item.id === addedLineItem.id
    })

    if (!foundLineItem) return lineItems.concat(addedLineItem)

    return lineItems.map(function (item) {
        if (item.id === addedLineItem.id) {
            var newQty = item.qty + addedLineItem.qty;
            return Object.assign({}, item, {qty: newQty})
        }
        return item
    })
}

module.exports = {
    total: total,
    addItem: addItem
}