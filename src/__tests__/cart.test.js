var cart = require('../cart')

describe('cart module test', function() {
    test('total should return correct value', function() {
        var books = [{
                id: "1",
                title: "Belajar koding",
                qty: 2,
                price: 20
            },
            {
                id: "2",
                title: "Ngoding bareng",
                qty: 3,
                price: 20
            }
        ]

        expect(cart.total(books)).toBe(100);
        expect(cart.total([])).toBe(0);

    })
})