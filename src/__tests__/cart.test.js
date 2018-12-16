var cart = require('../cart')

describe('cart module test', function () {
    test('total should return correct value', function () {
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

    test('added should behave naturally', function () {
        var books = []

        books = cart.addItem (books, {
            id: "1",
            title: "Belajar koding",
            qty: 1,
            price: 20
        })

        expect(books.length).toBe(1)

        books = cart.addItem( books, {
            id: "2",
            title: "Javascript 101",
            qty: 2,
            price: 10
        })

        expect(books.length).toBe(2)
        expect(books[1].qty).toBe(2)

        books = cart.addItem(books, {
            id: "2",
            title: "Javascript 101",
            qty: 2,
            price: 10
        })

        expect(books.length).toBe(2)
        expect(books[1].qty).toBe(4)

    })
})