const phoneBill = {
  id: 1,
  price: 1432,
  date: "2018-06-08T04:00:00.000Z",
  createdAt: "2018-05-14T21:06:28.313Z",
  updatedAt: "2018-05-14T21:06:28.313Z",
  userId: 1
};

const rentBill = {
  id: 1,
  price: 123,
  date: "2018-06-01T04:00:00.000Z",
  createdAt: "2018-05-15T21:06:28.313Z",
  updatedAt: "2018-05-14T21:06:28.313Z",
  userId: 1
};

const demoAccounts = {
  error: false,
  accountInfo: [
    {
      account_id: "BJwax5vY6kFww0qQ9aJ9C4LnJab5zkf9qkYaP",
      balances: { available: 995.88, current: 995.88, limit: null },
      mask: "1371",
      name: "CHASE SAVINGS",
      official_name: null,
      subtype: "savings",
      type: "depository"
    },
    {
      account_id: "PQ0YKV7ExXs00KaeQBAQTEqR6YXV8aSmQ3ern",
      balances: { available: 2115.25, current: 995.88, limit: null },
      mask: "6254",
      name: "CHASE COLLEGE",
      official_name: null,
      subtype: "checking",
      type: "depository"
    },
    {
      account_id: "qVP6re7OaqU117QvYKMYFvzk8VPLrxHJZvVoe",
      balances: { available: 925.21, current: 9074.79, limit: 10000 },
      mask: "8623",
      name: "CREDIT CARD",
      official_name: "FREEDOM UNLIMITED CREDIT CARD",
      subtype: "credit card",
      type: "credit"
    }
  ]
};

const demoTransaction = {
  error: false,
  transaction: [
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 13.07,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2018-05-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LEONIDAS CHOCOLATES",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": true,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgEDaC1QMryymNgiBA0do5",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 26.25,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2018-05-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MTA MVM VENDING MACHINES",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": true,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxaSR6NAeeOQ1fqeaxgm",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 790.46,
      "category": [
        "Shops",
        "Clothing and Accessories"
      ],
      "category_id": "19012000",
      "date": "2018-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "260 SAMPLE SALE CHELSE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": true,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMPQS1xapD9KqJTJy3jnE",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.8,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KING OF FALAFEL &",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": true,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQrsXN0j0J3wXCdZ517E",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 18,
      "category": [
        "Service",
        "Personal Care"
      ],
      "category_id": "18045000",
      "date": "2018-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PAYGATE_KIWDISK 4552788",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5ML0sOZ0y5EbeEfAwaZEg",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 25,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": true,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1QFVxO83dKLJFJMbdaZ",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 8.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TACOS MORELOS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "vBoKJdmqw1UqN5veDMKKcjpK3y48neImdKdwq",
      "transaction_id": "X6MZDLBYyKFL03QEAJyVtdz0yOPD9PH4ZXgJ1",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 1.1,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2018-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "USA*IDEAL VENDING",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "KA9yJZO7nRF3ZXn95pjjsqQ0kez9DKfQB4BOb",
      "transaction_id": "p6d13g0wRQFwRPBZVM1LSVoKep8zM8tJ56oKb",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 8.01,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KILLARNEY ROSE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "NjQAgbrOdwF8jYy7XKd8COgVp6aZQYFYnqYdR",
      "transaction_id": "dvgQ70AY8ZUEBJn4YK8QUNr6a4oe0PCbJvQNO",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 3.27,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "OPEN KITCHEN 15 IN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": true,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQvUYKrVvjE5qud1bEnb",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 4.9,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "OPEN KITCHEN 15 IN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": true,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBDF05dpV37xjUrVNgvR",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 690.79,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-05-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 05/14",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "rD7qA9xLnwtL4xy1gMqqI3aDxmj1ezCB3XgLB",
      "transaction_id": "zko09DvK13IK1pgAqM08t950X8vEpDTOy8nJe",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 42,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-05-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "4OE94dj1AKUDONE94qjjU5R1w6grPBCkm37oR",
      "transaction_id": "mZg6L5aYOMf58V1brO63tdbDEpBKZrFMk6veP",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 13.25,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "HONG KONG RESTAURANT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "VmAJdwyYB3iwMqpE8aB5cNvXp5rj1NCO85BkL",
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAAsNkrzw89gbCM1ngjv",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -690.79,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-05-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqqIxKOqPMgadIBO07An",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 25,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-05-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjjUwebMNOkRVTkjOrEr",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 8,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TACOS MORELOS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "Or0v9g5Yw6CD8dRYmkwDTMBe7o6LVOuobXLMO",
      "transaction_id": "aKbM8k1YaxIkX49oeBNNhwajPKDqAgTZqEVap",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 312.6,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2018-05-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "bkKE5A1YxJIzraYv7Ox6he4gDveXo1IqwNvO5",
      "transaction_id": "4OE94dj1AKUDONE94qjDTMKpxyKnPBHkzPD8v",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 8.44,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2018-05-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "RUBY'S CANDY & GROCERY IN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "QaQjE9wYLDfpr6AY5vLvTm491xXLXPfyLPgpP",
      "transaction_id": "grAXR4gYobC4y5ZKpvo8UzvzXyyRmQHqLVEqw",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 1.1,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2018-05-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "USA*IDEAL VENDING",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "5oEVxw5PvkfxK95D1B6Vh9DdNV3pN5IDKq19R",
      "transaction_id": "bkKE5A1YxJIzraYv7OxjIkOk0QQoLvCqwYaq1",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 1.1,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2018-05-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "USA*IDEAL VENDING",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "JkO3a8bgQEIJkdPNwqK9tXZE1rmv1YH9pYqoq",
      "transaction_id": "ow1DqbBdERHMyamZgED6hxmxRNN7XoCBZN0B6",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 12.79,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ROTI MEDITERRANEAN GRILL",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "ALmdwAp4b5CDZ0NJexYRhqJa4QKj4OF6xx3Lz",
      "transaction_id": "4OE94dj1AKUDONE94qjoi5jB8R46mAFkME5NM",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 29.06,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "LvmKZ509pQUjDgB07p6NHV0J5Bpxgbt0K7Rpn",
      "transaction_id": "6oBO86zq0AfwQNL1a3b3CP1qxMaXLLFavJ7Kw",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 21.78,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KING OF FALAFEL & SHA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "w3jkZwoB6PHB6m0D8MkoUXjrp1YDwOHdO1Ap5",
      "transaction_id": "LvmKZ509pQUjDgB07p6phVpRL8wNXXH0AMz7J",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 1.1,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2018-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "USA*IDEAL VENDING",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "yK7vgL3yDBIyDErXjMvACqE7gzopgXFOPPq5j",
      "transaction_id": "w3jkZwoB6PHB6m0D8MkMsbraJKOQ99fL94AXL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 725,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-05-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "6oBO86zq0AfwQNL1a3b9sPnb4r1p69CaoKp3n",
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAguwPZQ0796vCMk6Dbw",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 15.24,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ROTI MEDITERRANEAN GRILL",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "rD7qA9xLnwtL4xy1gMqBcm7QeJnkLBIBE8m7o",
      "transaction_id": "aKbM8k1YaxIkX49oeBN6fEJxkLRR7RfZwaeDq",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 13.63,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TERRACE FISH & CHIPS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqaT01zjnJJBJIBdA89q",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 4.12,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2018-05-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "11962",
        "zip": null
      },
      "name": "Walgreens",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": "aKbM8k1YaxIkX49oeBNmIN6moRLZr7tZYeXVv",
      "transaction_id": "4OE94dj1AKUDONE94qj3h3rBgvAA4AFkMEQLx",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -0.01,
      "category": [
        "Interest",
        "Interest Earned"
      ],
      "category_id": "15001000",
      "date": "2018-05-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTEREST PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJa6Y4jERIZv3Ddy",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2018-05-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7PrgyakDIROXNBy",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 68.79,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ALIADA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDQeZa5BoCL6oYXm",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.22,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-05-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqzLVeRJb6fr8aNXn",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 12.09,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-05-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "280",
        "zip": null
      },
      "name": "Potbelly Sandwich Shop",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VYbQJ7xMCMDyxYk",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Community",
        "Organizations and Associations",
        "Charities and Non-Profits"
      ],
      "category_id": "12015003",
      "date": "2018-05-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "QueensJS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "WePay",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJvQr1z9VbFb3jepm",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 26.9,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FOOD BAZAAR",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1d54ogKOtOZ39Y8",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -2000,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 8953100120GS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9XDBKrqmFmNj3D6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Bank Fees",
        "Foreign Transaction"
      ],
      "category_id": "10005000",
      "date": "2018-04-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTERNATIONAL INCOMING WIRE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqp3XNBdynf6g0qJE",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 4.75,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2018-04-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LA COLOMBE - PRINCE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MQaOyj1dudJ1Eo3",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 7.25,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2018-04-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "POMMES FRITES",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6dQexN9rFRJran7",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 29.92,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SEAMLSSMOKJAKOREANEAT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mg4ojOdACQx3BjZ",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 7,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "JUSTINO`S PIZZERIA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNyAq4vgat4w8mQg",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 11.97,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LENWICH 10 HANOVER LLC",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAeZO05wJCJ1jkr8",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 73.33,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-04-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8y1J4wYAtAn4e6z",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 10,
      "category": [
        "Community",
        "Religious",
        "Churches"
      ],
      "category_id": "12018004",
      "date": "2018-04-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UNITY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaP9ZQo3k4uEDjmRX",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 12.83,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "03192531",
        "zip": null
      },
      "name": "Subway",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZDz6xg0qtyQRDPO",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -294.6,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXM756ajJntpkaB7B",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 294.6,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 04/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqQxeLypRFRwB7dy",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 5.54,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2018-04-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "14125",
        "zip": null
      },
      "name": "Duane Reade",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKaJw84bpIMeV3y1",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 44.6,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KONDO RESTAURANT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVN01XvybqFdDKbzN",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 29.94,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "OBAO",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OND7ELqgI8a3K1A",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.45,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2018-04-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "10569",
        "zip": null
      },
      "name": "Rite Aid",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMBzvVZojCrwLNDy",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.8,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KING OF FALAFEL & SHA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4LbrdEPqCqLD19e",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 6.39,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "OPEN KITCHEN 15 IN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdXPwmrOYCQjqmrg",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5YdV07BmsQY7R5g",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 28.04,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe18YZrB3qFqwm7vj",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 121,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2018-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp57XLZV3MCMrvzgL",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -669.8,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJaBbDxVqZFB9Kkzm",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 669.8,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 04/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4LJgjYmA7f9qkYaX",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPKXB0qYdrFaoLxke",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 38,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKvxLmbyOfO1xN7B",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 39.84,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SEAMLSSPELICANACHICKE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwgxk7ND9KFRJx67J",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 70.36,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2018-04-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "A TIME FOR WINE TROPICANA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpazZBrA7tbopw56",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 62.65,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DOCK'S OYSTER HOUSE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaA017ZKNtyQ9azj",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 32.67,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "9959",
        "zip": null
      },
      "name": "P.F. Chang's China Bistro",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp57XLZV3MCMrvzgv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 70,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-04-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz8Oajg6JtJZvVod",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 300.99,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-04-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEq63xpvjAFmQ3erV",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 50.65,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "YAKITORI TOTTO",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6moRLZr7tZYeXVp",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Travel",
        "Charter Buses"
      ],
      "category_id": "22007000",
      "date": "2018-04-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GREYHOUND F/S #2007",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p8PAvq74CkNQbrr",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -130.43,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2018-04-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MEALPAL",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm7QeJnkLBIBE8m7n",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 13.07,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "OBAO",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqzLVeRJb6fr8aNXo",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 25,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-04-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7PrgyakDIROXNBw",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Service",
        "Personal Care"
      ],
      "category_id": "18045000",
      "date": "2018-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PAYGATE_KIWDISK 4552788",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9XDBKrqmFmNj3Dg",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 21.51,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DISTRICT MOT.",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqQxeLypRFRwB7dp",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 13.66,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-04-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqp3XNBdynf6g0qJB",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 45.1,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KONDO RESTAURANT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5YdV07BmsQY7R51",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Bank Fees",
        "ATM"
      ],
      "category_id": "10002000",
      "date": "2018-04-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM FEE-WITH",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJa6Y4jERIZv3DpD",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 51.75,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-04-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM WITHDRAW 079564 04/082523 BROA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z8JbDAgXumB8pQX",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 33.81,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SEAMLSSPELICANACHICKE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygODPEVbBFBZPjMb",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.42,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "0476",
        "zip": null
      },
      "name": "Chipotle Mexican Grill",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwgxk7ND9KFRJx6Eb",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 98,
      "category": [
        "Travel",
        "Charter Buses"
      ],
      "category_id": "22007000",
      "date": "2018-04-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GREYHOUND LINES CNP",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaA017ZKNtyQ9azy",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 12.4,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "2179",
        "zip": null
      },
      "name": "McDonald's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJaBbDxVqZFB9KkRN",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "JUSTINO`S PIZZERIA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygODPEVbBFBZPj53",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 7.8,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2018-04-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAXI SVC LONG ISALND C",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpazZBrA7tbopw59",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-04-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 003555 04/0445 WALL S",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kPEzYL9DSKZBpJy",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -0.01,
      "category": [
        "Interest",
        "Interest Earned"
      ],
      "category_id": "15001000",
      "date": "2018-04-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTEREST PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKNr6RD3BF0K4e7n",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2018-04-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPKXB0qYdrFaoLxKn",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2018-04-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKNr6RD3BF0K4eDw",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 24.69,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LAN LARB",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVmL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.84,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvAZ",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 130.43,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2018-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MEALPAL",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gz7",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.3,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2018-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAXI SVC 41-25 36TH ST",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jd8w",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 15.66,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2018-04-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UA KAUFMAN ASTORIA 14",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30nA",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 725,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-04-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rjp",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 36,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2018-04-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Regal Cinemas",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8oO5",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 5.54,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-04-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wLq",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 25.02,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-04-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZpw",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-03-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 003609 03/3055 WATER",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQRO9e",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 25.49,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-03-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jv75",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -653.23,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-03-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rMk",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 653.23,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-03-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 03/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjN99",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 149.55,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2018-03-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TEXT2PAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNwq",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 8.7,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CAFE ARTE 2",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROK7",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.8,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KING OF FALAFEL & SHA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagZD",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 26.01,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wZr",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 6.48,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2018-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PINKBERRY 15049",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Bo",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 25,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRzR",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-03-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 001230 03/2655 WATER",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV80d",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.92,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-03-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0Ipkagdp",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 52.64,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "YAKITORI TOTTO",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAPb",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 15.78,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2018-03-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "10298",
        "zip": null
      },
      "name": "CVS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgMp",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 5.17,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2018-03-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GONG CHA CHINATOWN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30nm",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 16.2,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "2179",
        "zip": null
      },
      "name": "McDonald's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy4P",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 12.03,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "280",
        "zip": null
      },
      "name": "Potbelly Sandwich Shop",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZp4",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 39.03,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SEAMLSSENTHAICETHAIKI",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wLv",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 42.95,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BONCHON ASTORIA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8oOA",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.9,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-03-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wpM",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 3.54,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-03-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "16628",
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rML",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 4.84,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-03-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "07285",
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jv7B",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-03-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRnd",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 14.4,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-03-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNwo",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.06,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-03-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy8b",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.16,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-03-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKA63",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Bank Fees",
        "ATM"
      ],
      "category_id": "10002000",
      "date": "2018-03-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM FEE-WITH",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1L3mD6v7CqwmpPy",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 51.75,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-03-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM WITHDRAW 452611 03/192523 BROA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDg6d",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 7.61,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "COTTON GOURMET INC.",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROKQ",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 61.17,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "HAEIN SUSHI AND SASHIMI",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagJP",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 23.22,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-03-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV85D",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 25.04,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KING OF FALAFEL & SHA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAkR",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 121,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2018-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wV3",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 30.22,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SEAMLSSDISTRICTSAIGON",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRXD",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -5000,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:646591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 5906700071HG",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8r7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Bank Fees",
        "Foreign Transaction"
      ],
      "category_id": "10005000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTERNATIONAL INCOMING WIRE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrvemX",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from CHK ...6254 transaction#: 6975337282",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkAQP",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -166,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6973370665",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9KqNg",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 166,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6973370665 03/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbPe",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to SAV ...1371 transaction#: 6975337282 03/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopY0D",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -304.86,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1L3mD6v7Cqwmpgo",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -81.44,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDg34",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 81.44,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 03/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx085",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 304.86,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 03/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dYE",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 34.29,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAKE 31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyDA",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 7.61,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-03-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8oO",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 21,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2018-03-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI2L65",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9Kq6d",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 6.48,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "COTTON GOURMET INC.",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopYX7",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 95,
      "category": [
        "Shops",
        "Department Stores"
      ],
      "category_id": "19018000",
      "date": "2018-03-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MACYS HERALD SQUARE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dJJ",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 5.43,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "601723",
        "zip": null
      },
      "name": "Panera Bread",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0Vz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2018-03-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6965778565",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe8KM",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2018-03-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6965778565 03/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3ZDn",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -81.44,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveJm",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 81.44,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 03/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXD3",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 200,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 003148 03/063 TIMES S",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vrP",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 30.39,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2018-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DELIVERY.COM",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXJk",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 11.07,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe897",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 27.52,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vaZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2018-03-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQpR",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 160.24,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-03-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 03/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8ab9N",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 36,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-03-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAKE 31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXL1V",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 70,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-03-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLvL",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 130.43,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2018-03-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MEALPAL",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8abVk",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -160.24,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-03-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQkA",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 15.37,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-03-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *TRIP 4MY3U",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07bm",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Bank Fees",
        "ATM"
      ],
      "category_id": "10002000",
      "date": "2018-03-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM FEE-WITH",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBqb8",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 102,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-03-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM WITHDRAW 271581 03/0191 FIRST",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07wp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3107,
      "category": [
        "Transfer",
        "Withdrawal",
        "Check"
      ],
      "category_id": "21012001",
      "date": "2018-02-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CHECK # 5040",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pyj",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 15.24,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KING OF FALAFEL & SHA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBq3L",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 145,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MURPHYS PUB",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7p1x",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -322.15,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x43d",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 322.15,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 02/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4Rq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -300,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2018-02-26",
      "location": {
        "address": null,
        "city": "Astoria",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 02/25 3818 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB9P3",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Transfer",
        "Wire"
      ],
      "category_id": "21011000",
      "date": "2018-02-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DOMESTIC INCOMING WIRE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvb1O",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -1000,
      "category": [
        "Transfer",
        "Wire"
      ],
      "category_id": "21011000",
      "date": "2018-02-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FEDWIRE CREDIT VIA: WOORI BANK, NEW YORK/026005416 B/O: PARK HYE SUK SINDAEBANG-DONG DONGJAK-GU REF: CHASE NYC/CTR/BNF=JOSHUA SHIN PARK ASTORIA, NY 111063320/AC-0000000094 07 RFB=O/B WOORI BANK N OBI=/ROC/FD T8218000672 TEL:6466591495 IMAD: 0226QMGFT005002168 TRN: 6734509057FF",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkAv6",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 17.2,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "251 GINZA SUSHI HUANG I",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbB6",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 48.48,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2018-02-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "9640 AMC ONLINE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3Z1N",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 23.4,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB97j",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 33.39,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkAdV",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 149.55,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2018-02-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4pmq",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 12.03,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "251",
        "zip": null
      },
      "name": "Potbelly Sandwich Shop",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38Vr",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 19.6,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "WOORI JIP",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XjN",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 18.5,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-02-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "D'AGOSTINO STORE #",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3yP",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -270.02,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-02-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaya",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 270.02,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-02-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 02/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XYB",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -499.75,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-02-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3ZO5",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 27.22,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2018-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CELL NATION",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gdm",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 31.15,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KONDO RESTAURANT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdye",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 25,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyV3O",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Service",
        "Personal Care"
      ],
      "category_id": "18045000",
      "date": "2018-02-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PAYGATE_KIWDISK 4552788",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8ozO",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 17.42,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SEAMLSSOLIVERS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o0A",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 14.19,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-02-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wkv",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 20.67,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-02-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZx4",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.41,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "OPEN KITCHEN 15 IN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvZB",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 16.77,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "251",
        "zip": null
      },
      "name": "Potbelly Sandwich Shop",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4r0L",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 6.75,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2018-02-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "RUBY'S CANDY & GROCERY IN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNzo",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-02-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38wA",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1818,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-02-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4pZN",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 6.12,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2018-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "14125",
        "zip": null
      },
      "name": "Duane Reade",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagnP",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -290.88,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8pD",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 290.88,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 02/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3wL",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 6.53,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "03192531",
        "zip": null
      },
      "name": "Subway",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQRO4Q",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 51.25,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BBQ CHICKEN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wg3",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 8.26,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KILLARNEY ROSE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRjD",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.28,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-02-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAxR",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 17.8,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-02-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy5A",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 15.79,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2018-02-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FRITESNMEATS GROUP LL",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9Kq4d",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 121,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2018-02-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1L3mD6v7CqwmpDo",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 8.3,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2018-02-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI4K27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgK4",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 21.3,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2018-02-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI4K27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8bO",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 4.26,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PIE BY THE POUND",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dvJ",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 5.75,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-02-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "THINK COFFEE 4TH",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0kz",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 7.49,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2018-02-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "14125",
        "zip": null
      },
      "name": "Duane Reade",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveKm",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 8.76,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2018-02-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAXI SVC PARLIN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopY77",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 54,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GYU-KAKU RESTAURANT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXnk",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 5.44,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "OPEN KITCHEN 15 IN",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe817",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 20.99,
      "category": [
        "Shops"
      ],
      "category_id": "19000000",
      "date": "2018-02-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Amazon",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vwZ",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -282.46,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-02-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLjV",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 282.46,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-02-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 02/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaKX",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 37.99,
      "category": [
        "Shops",
        "Convenience Stores"
      ],
      "category_id": "19015000",
      "date": "2018-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GREENBAY ESSENTIALS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8abvk",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 26.86,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SHUYA CAFE DE RAMEN.",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQ0A",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 11.98,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ASTORIA BIER AND CHEESE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBqvL",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 20.57,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ASTORIA BIER AND CHEESE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07nm",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 15.23,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PETEY'S BURGER",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pmx",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 78.26,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2018-02-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MEALPAL",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB9Aj",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 15.79,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UNDERGROUND PIZZA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4gd",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-02-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 004785 02/0155 WATER",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gvJ",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 75.78,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-02-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "JEAN GEORGES",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkA7V",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.28,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-02-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdKV",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -412.37,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-02-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbE6",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 412.37,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-02-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 02/01",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVBZ",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 11.31,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "3658",
        "zip": null
      },
      "name": "Burger King",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3ZAN",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-01-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30JY",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 154.84,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2018-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XgN",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 25,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4pBq",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 11.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TST* DOS TOROS - MAIDEN L",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3NP",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 22,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "VITE VINOSTERIA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38Rr",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 12.88,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-01-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oava",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 3.92,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2018-01-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INSOMNIA COOKIES - 3RD",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdQe",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 3.99,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2018-01-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "10569",
        "zip": null
      },
      "name": "Rite Aid",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVvO",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 24.54,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-01-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gnm",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 43.02,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-28",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "TST* OKA -",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30qm",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 9.42,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "0950",
        "zip": null
      },
      "name": "Chipotle Mexican Grill",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wbv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 60,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2018-01-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wna",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 52.55,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BAEKJEONG",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8oaA",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 14,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Dig Inn Broad Street",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZL4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-01-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 007429 01/2455 WATER",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZob",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 23.4,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jv4B",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.34,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-01-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8odO",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -1894.22,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-01-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rpL",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1894.22,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-01-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 01/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jv3Z",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 1630.95,
      "category": [
        "Shops",
        "Computers and Electronics"
      ],
      "category_id": "19013000",
      "date": "2018-01-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Apple Store",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROqQ",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 44.11,
      "category": [
        "Shops",
        "Bookstores"
      ],
      "category_id": "19009000",
      "date": "2018-01-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "GAM MEE OK",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV80D",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 4.36,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2018-01-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "IDEA COFFEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wp3",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 36,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KILLARNEY ROSE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjN4o",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 71.51,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MERMAID OYSTER BAR",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagdP",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 7.99,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2018-01-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "08968",
        "zip": null
      },
      "name": "CVS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy8A",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 19.49,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2018-01-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": "1",
        "zip": null
      },
      "name": "Hale and Hearty Soups",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRnD",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 13.05,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PETEY'S BURGER",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKA6R",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 20.83,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2018-01-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CITY ACRES MARKET",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30zY",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 17.91,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TASTE OF TOKYO INC",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDg64",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 12.52,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UNDERGROUND PIZZA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1w4a",
      "transaction_type": "place"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": -316.71,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2018-01-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment Thank You-Mobile",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30wm",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 316.71,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-01-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 01/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rBp",
      "transaction_type": "special"
    },
    {
      "account_id": "Or0v9g5Yw6CD8dRYmkwQs9OpNZ3jwaS8a3KD6",
      "account_owner": null,
      "amount": 15.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2018-01-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TST* DOS TOROS - MAIDEN L",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZyb",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 431.08,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2018-01-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 01/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNO9",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -635.52,
      "category": [
        "Transfer",
        "Deposit",
        "Check"
      ],
      "category_id": "21007001",
      "date": "2018-01-11",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CHECK DEPOSIT 01/11 28 LIBERTY ST",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROee",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15610,
      "category": [
        "Transfer",
        "Withdrawal",
        "Check"
      ],
      "category_id": "21012001",
      "date": "2018-01-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CHECK # 5039",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Xd",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -2000,
      "category": [
        "Transfer",
        "Deposit"
      ],
      "category_id": "21007000",
      "date": "2018-01-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DEPOSIT ID NUMBER 145211",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagQp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Bank Fees",
        "ATM"
      ],
      "category_id": "10002000",
      "date": "2018-01-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM FEE-WITH",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLR4d",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 51.75,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-01-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM WITHDRAW 946293 01/092523 BROA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wxM",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2,
      "category": [
        "Transfer",
        "Withdrawal",
        "Check"
      ],
      "category_id": "21012001",
      "date": "2018-01-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "COUNTER CHECK",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDg8d",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 21.28,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-01-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy0b",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 33.61,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-01-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAg3",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.37,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-01-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1L3mD6v7CqwmpJy",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.5,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-01-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP847",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 100,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2018-01-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 003412 12/313536 154T",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0b5",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.84,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2018-01-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9Kqwg",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -10000,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-12-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 7697000363JS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopYmD",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -10000,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-12-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 7697100363JS",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dxE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Bank Fees",
        "Foreign Transaction"
      ],
      "category_id": "10005000",
      "date": "2017-12-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTERNATIONAL INCOMING WIRE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe87M",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Bank Fees",
        "Foreign Transaction"
      ],
      "category_id": "10005000",
      "date": "2017-12-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTERNATIONAL INCOMING WIRE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveOX",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 584.41,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-12-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 12/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXR3",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 584.41,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-12-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 12/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLeL",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 56,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-12-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vVP",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 182.59,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-12-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 12/21",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8abAN",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 280.18,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-12-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 12/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQVR",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Bank Fees",
        "ATM"
      ],
      "category_id": "10002000",
      "date": "2017-12-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM FEE-WITH",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pEj",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-12-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM WITHDRAW 456209 12/182544 BROA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBqo8",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 49,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-12-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07Mp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 151.18,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-12-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 8623 12/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4pq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -2000,
      "category": [
        "Transfer",
        "Deposit"
      ],
      "category_id": "21007000",
      "date": "2017-12-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DEPOSIT ID NUMBER 288873",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB9o3",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 43.02,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-12-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DISTRICT MOT. ASTORIA NY 12/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbDO",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 100,
      "category": [
        "Recreation",
        "Golf"
      ],
      "category_id": "17015000",
      "date": "2017-12-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DWIT GOL MOK FLUSHING NY 12/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkA36",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 48.37,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-12-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART NEW YORK NY 12/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4p0N",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 61.72,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-12-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "IZAKAYA NOMAD NEW YORK NY 12/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XnB",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 38.01,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-12-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "K-TOWN BBQ NEW YORK NY 12/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38ZA",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-12-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3aL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.8,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-12-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAXI SVC LONG ISLAND LONG ISLAND C NY 12/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3Zo5",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2017-12-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaLX",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 295.13,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-12-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 12/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVMZ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.34,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-12-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdbV",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-11-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gOJ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.24,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-11-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30QY",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 11.84,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-11-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wda",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -2000,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-11-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 9859200326FI",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZRb",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Bank Fees",
        "Foreign Transaction"
      ],
      "category_id": "10005000",
      "date": "2017-11-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTERNATIONAL INCOMING WIRE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvJZ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Bank Fees",
        "ATM"
      ],
      "category_id": "10002000",
      "date": "2017-11-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM FEE-WITH",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rAp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 62,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-11-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM WITHDRAW 576608 11/2225-30 BRO",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o4O",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2000,
      "category": [
        "Community",
        "Education"
      ],
      "category_id": "12008000",
      "date": "2017-11-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FULLSTACK ACADEMY IN FULLSTACKACAD NY 11/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNE9",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.53,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-11-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROye",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 60,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-11-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0Ipkagpp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 250.87,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-11-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 11/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3w8M",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 281.69,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-11-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 11/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Md",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 191.35,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-11-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 11/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRrd",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 48.48,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-11-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "9640 AMC ONLINE KS 11/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyQb",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 80.74,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-11-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 11/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgqd",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 31.85,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-11-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAd3",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -2000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-11-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRANSFER FROM CHK XXXXXX2811",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30Q8",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 453.62,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-11-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 11/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZR9",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 26.95,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-11-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wdr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 56,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-11-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MISSION ESCAPE GAMES MISSIONESCAPE NY 11/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNE1",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 250.74,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-11-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 11/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rAv",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.33,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-11-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o4Z",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 35.66,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-11-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvJw",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Service",
        "Personal Care"
      ],
      "category_id": "18045000",
      "date": "2017-11-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PAYGATE_KIWDISK 45527 SEOUL 10/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROy3",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 196.19,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-11-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 11/01",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0Ipkagpx",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.89,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-10-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Mx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.01,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-10-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3w8w",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.22,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-10-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRrN",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 205.24,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-10-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 10/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyQ9",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 38.93,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-10-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAd7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.47,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-10-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgq0",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 233.27,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-10-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 10/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1L3mD6v7Cqwmpq4",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 27.57,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-10-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Papa John's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9KqBj",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.84,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-10-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8Bg",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23.47,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-10-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0RK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.44,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-10-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dyR",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 93.56,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-10-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 10/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopYb3",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-10-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRANSFER FROM CHK XXXXXX2811",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveMr",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -1000,
      "category": [
        "Transfer",
        "Deposit"
      ],
      "category_id": "21007000",
      "date": "2017-10-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DEPOSIT ID NUMBER 510568",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe8jr",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 333.34,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-10-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 10/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXAe",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-10-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRANSFER FROM CHK XXXXXX2811",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vZ8",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 49,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-10-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREEHOUSE FL 10/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLZM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.49,
      "category": [
        "Shops",
        "Digital Purchase"
      ],
      "category_id": "19019000",
      "date": "2017-10-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Yodo1 Games g.co/helppay# CA 10/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Google Wallet",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8abeX",
      "transaction_type": "digital"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 307.68,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-10-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 10/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQMv",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 163.87,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-10-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 10/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBq90",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -27,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-10-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07N9",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.4,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-10-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pdN",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22.46,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-10-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4Xo",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 60,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-10-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB9Dz",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -300,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-09-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 6426200272JL",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkA4d",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Bank Fees",
        "Foreign Transaction"
      ],
      "category_id": "10005000",
      "date": "2017-09-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTERNATIONAL INCOMING WIRE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbNE",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 331.26,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-09-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 09/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3ZwO",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.4,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-09-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8Xbn",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 251.49,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-09-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 09/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38YZ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40.89,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-09-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL306",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 30.11,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-09-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4poo",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 252.47,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-09-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 09/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oadx",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -2000,
      "category": [
        "Transfer",
        "Deposit"
      ],
      "category_id": "21007000",
      "date": "2017-09-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DEPOSIT ID NUMBER 45113",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jd0x",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 104.68,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-09-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 09/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVra",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.71,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-09-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gAp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 365.41,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-09-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 09/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30e8",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 49,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-09-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREEHOUSE FL 09/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wxr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2017-09-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZY9",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.93,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-09-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvew",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 210.17,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-09-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 09/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8orZ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 285.92,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-09-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 09/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rQv",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.67,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-09-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNy1",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 60,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-09-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROV3",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 350.02,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-08-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 08/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0Ipkag6x",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 180.22,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-08-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "342 WEST 40TH STREET LL NEW YORK NY 08/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8dx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 26.41,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-08-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US AUG23 UZGR CA 08/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wow",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.23,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-08-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BBQ CHICKEN NEW YORK NY 08/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy39",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 36.84,
      "category": [
        "Recreation"
      ],
      "category_id": "17000000",
      "date": "2017-08-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CULL AND PISTOL NEW YORK NY 08/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRON",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -2,
      "category": [
        "Transfer",
        "Credit"
      ],
      "category_id": "21005000",
      "date": "2017-08-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Cash Redemption",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XEr",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 39.72,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-08-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 08/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgX0",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 14.62,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-08-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8Jg",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 77.19,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-08-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "The Lobster Place (Reta New York NY 08/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAX7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 150,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-08-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1L3mD6v7Cqwmp64",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 48,
      "category": [
        "Shops",
        "Clothing and Accessories"
      ],
      "category_id": "19012000",
      "date": "2017-08-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CARHARTT WORK IN PROGRE NEW YORK NY 08/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx04K",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.32,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-08-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9KqDj",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 55,
      "category": [
        "Shops",
        "Clothing and Accessories"
      ],
      "category_id": "19012000",
      "date": "2017-08-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Nike SOHO 325 New York NY 08/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9d1R",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 572.64,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-08-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 08/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopY93",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-08-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 08/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4Lr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -34.5,
      "category": [
        "Service",
        "Travel Agents and Tour Operators"
      ],
      "category_id": "18067000",
      "date": "2017-08-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PLN*PRICELINE.COM AI CT 08/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBq9w",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 34.5,
      "category": [
        "Service",
        "Travel Agents and Tour Operators"
      ],
      "category_id": "18067000",
      "date": "2017-08-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PRICELINE*AIR TICKETS CT 08/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pZD",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 14.9,
      "category": [
        "Shops",
        "Clothing and Accessories"
      ],
      "category_id": "19012000",
      "date": "2017-08-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UNIQLO NY 34TH ST #32 NEW YORK NY 08/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9eB",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.32,
      "category": [
        "Shops",
        "Computers and Electronics",
        "Video Games"
      ],
      "category_id": "19013001",
      "date": "2017-08-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Blizzard Entertainment",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAx5",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -637,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-08-14",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 08/14 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbao",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -510,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-08-14",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 08/14 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZMb",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -45,
      "category": [
        "Transfer",
        "Deposit",
        "Check"
      ],
      "category_id": "21007001",
      "date": "2017-08-14",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CHECK DEPOSIT 08/14 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8X14",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.36,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-08-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pY8",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 101.19,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-08-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 08/14",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL369",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.37,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-08-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38o0",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 226,
      "category": [
        "Travel",
        "Lodging"
      ],
      "category_id": "22012000",
      "date": "2017-08-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "AMOMA.COM HOTELS ANNEMASSE 08/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVdv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 11.5,
      "category": [
        "Travel",
        "Charter Buses"
      ],
      "category_id": "22007000",
      "date": "2017-08-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MEGABUS.COM WWW.MEGABUS.C NJ 08/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jd9y",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.5,
      "category": [
        "Travel",
        "Charter Buses"
      ],
      "category_id": "22007000",
      "date": "2017-08-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MEGABUS.COM WWW.MEGABUS.C NJ 08/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaZe",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 180.98,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-08-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 08/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g4M",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12,
      "category": [
        "Travel",
        "Charter Buses"
      ],
      "category_id": "22007000",
      "date": "2017-08-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BOLT BUS TX 08/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30rJ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.96,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-08-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wjd",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.5,
      "category": [
        "Travel",
        "Charter Buses"
      ],
      "category_id": "22007000",
      "date": "2017-08-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GREYHOUND #4146 TX 08/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZKY",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 49,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-08-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREEHOUSE FL 08/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8o77",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-08-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvOX",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -0.04,
      "category": [
        "Interest",
        "Interest Earned"
      ],
      "category_id": "15001000",
      "date": "2017-08-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTEREST PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv380v",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 31.58,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-08-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4r8b",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.43,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-08-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNkA",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -1604,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-08-01",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 08/01 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQRO8J",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -417,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-08-01",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 08/01 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagw0",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -182.25,
      "category": [
        "Transfer",
        "Deposit",
        "Check"
      ],
      "category_id": "21007001",
      "date": "2017-08-01",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CHECK DEPOSIT 08/01 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8QE",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2599,
      "category": [
        "Community",
        "Education"
      ],
      "category_id": "12008000",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "APP ACADEMY CA 07/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "PayPal",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyOJ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2622.74,
      "category": [
        "Transfer",
        "Debit"
      ],
      "category_id": "21006000",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "EBOOKERS COM 22d9e6b7 f6c8 07/30 Pound Sterl1935.84 X 1.315372 (EXCHG RTE) + 76.39 (EXCHG RTE ADJ)",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8aw",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 76.85,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgZP",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6403773733",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRQo",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -2300,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6403879578",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wMq",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6403773733 07/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4p8E",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 2300,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6403879578 07/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3Yq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 85.55,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 07/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0Q0",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 411.94,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 07/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqLJ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.19,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpAY",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -150,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-07-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAa9",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6398629565",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d5a",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6398629565 07/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaro",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6397488263",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYgO",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6397488263 07/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdDp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1062.26,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-07-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 07/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrveL6",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 320.61,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-07-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 07/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8PQ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 480.47,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-07-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 07/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagwK",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 149.38,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2017-07-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT WWW.ATT.COM TX 07/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8Q6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.49,
      "category": [
        "Shops",
        "Digital Purchase"
      ],
      "category_id": "19019000",
      "date": "2017-07-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NetmarbleGam g.co/helppay# CA 07/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Google Wallet",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wMd",
      "transaction_type": "digital"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 50,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-07-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAap",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 100,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-07-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRQ9",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-07-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 002521 07/1632000 PAC",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgZL",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 416.44,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-07-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 07/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyOZ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.91,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-07-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpVK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 241.51,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-07-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 07/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kq7K",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.44,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-07-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8np",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 26.84,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-07-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0q7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -2700,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-07-10",
      "location": {
        "address": null,
        "city": "Astoria",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 07/10 3105 30TH AVE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dOz",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -740,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-07-10",
      "location": {
        "address": null,
        "city": "Astoria",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 07/10 3105 30TH AVE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYax",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -330,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-07-10",
      "location": {
        "address": null,
        "city": "Astoria",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 07/10 3105 30TH AVE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve5Q",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -280,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-07-10",
      "location": {
        "address": null,
        "city": "Astoria",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 07/10 3105 30TH AVE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8vb",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -69,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-07-10",
      "location": {
        "address": null,
        "city": "Astoria",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 07/10 3105 30TH AVE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8v6A",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -38,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-07-10",
      "location": {
        "address": null,
        "city": "Astoria",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 07/10 3105 30TH AVE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLdQ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -75,
      "category": [
        "Transfer",
        "Deposit",
        "Check"
      ],
      "category_id": "21007001",
      "date": "2017-07-10",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CHECK DEPOSIT 07/09 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXKq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 24.48,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-07-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abkV",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 350.02,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-07-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 07/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ90",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 84.58,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-07-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 07/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqro",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 49,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-07-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREEHOUSE FL 07/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07vw",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -0.06,
      "category": [
        "Interest",
        "Interest Earned"
      ],
      "category_id": "15001000",
      "date": "2017-07-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTEREST PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gK5",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2017-07-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4KX",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -400,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6349487263",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7peQ",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 400,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-07-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6349487263 07/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVNJ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 88.19,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-07-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KARAOKE WOW NEW YORK NY 06/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9re",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23.67,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-07-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAzz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 94.77,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-07-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NEW WONJO RESTAURANT NEW YORK NY 06/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbz7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-07-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI9V31 ASTORIA NY 06/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZdL",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.9,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-06-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PARIS BAGUETTE QUEENS NY 06/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38y7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 24.22,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-06-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XOM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 113.35,
      "category": [
        "Service",
        "Utilities"
      ],
      "category_id": "18068000",
      "date": "2017-06-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CONED BILL PAYMEN NY 06/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "FSI Merchant Services",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3Db",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 56.25,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-06-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "THE MAZE NEW YORK NY 06/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pvr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-06-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6326023554",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oax5",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-06-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6326023554 06/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx309d",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 24.32,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-06-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdwa",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 149.4,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2017-06-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT WWW.ATT.COM TX 06/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx304b",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Service",
        "Personal Care"
      ],
      "category_id": "18045000",
      "date": "2017-06-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PAYGATE_KIWDISK 45527 SEOUL 06/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVAn",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20.51,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-06-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g1r",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 86.04,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "HER NAME IS HAN NEW YORK NY 06/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8oDo",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 52.8,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KARAOKE WOW NEW YORK NY 06/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rYy",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 57.7,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KONDO RESTAURANT NY 06/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROpL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV876",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6318576011",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wPB",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6318576011 06/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1waY",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.39,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PARIS BAGUETTE-NEW YOR NEW YORK NY 06/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZgV",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.17,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PARIS BAGUETTE-NEW YOR NEW YORK NY 06/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjN5K",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 87.62,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 06/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkageK",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 35.24,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-06-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAKE 31 NEW YORK NY 06/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvXk",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.99,
      "category": [
        "Shops"
      ],
      "category_id": "19000000",
      "date": "2017-06-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Amazon",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRd9",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 166.18,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-06-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 06/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKALp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 11.11,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-06-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 06/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wzd",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-06-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "210 - BOWLERO QUEENS - WOODSIDE NY 06/21",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgvL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 24.36,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-06-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "210 - BOWLERO QUEENS WOODSIDE NY 06/21",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpXK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 50.45,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-06-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "210 - BOWLERO QUEENS WOODSIDE NY 06/21",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyaZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.98,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-06-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART 38 W. 32ND ST. NEW YORK NY 06/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8Dp",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-06-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI8J57 NEW YORK NY 06/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kq3K",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 74.44,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-06-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MK KARAOKE LLC NEW YORK NY 06/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dPz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 29.84,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-06-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0M7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-06-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8mb",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -800,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-06-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6305114006",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYex",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 800,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-06-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6305114006 06/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZ33",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 642.61,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-06-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 06/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve9Q",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-06-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vzA",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.43,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-06-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXvq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 56.35,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-06-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 06/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLJQ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.07,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-06-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abmV",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-06-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6285049859",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQA0",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-06-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6285049859 06/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o6P",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 134.91,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-06-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 06/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqno",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.22,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-06-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07zw",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20.18,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-06-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7p6Q",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 49,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-06-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREEHOUSE FL 06/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4vX",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.48,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-06-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9Re",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 267.09,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-06-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 06/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZBL",
      "transaction_type": "special"
    },{
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 27.75,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-05-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 05/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv3897",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 35.39,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XeM",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -907,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 05/30 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4r70",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -569,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 05/30 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNJ4",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -202.5,
      "category": [
        "Transfer",
        "Deposit",
        "Check"
      ],
      "category_id": "21007001",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CHECK DEPOSIT 05/30 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQRO19",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20.27,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVLn",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.74,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "M1 Long Island NY 05/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaj5",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6257675997",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pnr",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6257675997 05/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagEQ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 53.87,
      "category": [
        "Payment",
        "Credit Card"
      ],
      "category_id": "16001000",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Payment to Chase card ending in 6097 05/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30Kb",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.83,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g6r",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22.69,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdxa",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.26,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL34b",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.71,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-05-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "RUBY'S CANDY & GROCERY ASTORIA NY 05/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1w8B",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.59,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "McDonald's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZ1V",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.74,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-05-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US MAY24 IY6P CA 05/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8o3o",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 154.69,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2017-05-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT WWW.ATT.COM TX 05/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNpK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 05/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rby",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Service",
        "Personal Care"
      ],
      "category_id": "18045000",
      "date": "2017-05-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PAYGATE_KIWDISK 45527 SEOUL 05/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jv9k",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 45.2,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ALIADA RESTAURANT ASTORIA NY 05/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagVK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 24.21,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROML",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 11.1,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-05-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8L6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 56.65,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG NEW YORK NY 05/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3w0d",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23.41,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG NEW YORK NY 05/21",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpkK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.5,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-05-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FRESH FRUIT & GROCERY ASTORIA NY 05/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKA3p",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.99,
      "category": [
        "Travel",
        "Airports"
      ],
      "category_id": "22002000",
      "date": "2017-05-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LAGUARDIA-CC-BK 31-1 LONG ISLAND C NY126602 05/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqrK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.88,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-05-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8Rp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22.58,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyoZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.8,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-05-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAXI SVC LIC LONG IS CITY NY 05/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRb9",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.8,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 05/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgyL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 43.51,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ABIKO CURRY NEW YORK NY 05/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9doz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.5,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-05-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FOOD GALLERY 32 NY NY 05/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve7Q",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 121,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-05-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe80b",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.48,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-05-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. NEW YORK NY 05/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYKx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.03,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 05/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0e7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 14.95,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "HONG KONG RESTAURANT ASTORIA NY 05/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagOE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 28.84,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-05-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8vk",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.48,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 05/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wQZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.74,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "AMPLE HILLS CREAMERY NEW YORK NY 05/14",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAvx",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -321.88,
      "category": [
        "Transfer",
        "Deposit",
        "Check"
      ],
      "category_id": "21007001",
      "date": "2017-05-16",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CHECK DEPOSIT 05/16 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8PM",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.06,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KING OF FALAFEL & S ASTORIA NY 05/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyb8",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.18,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KING OF FALAFEL & S Queens NY 05/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgr8",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.79,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRPX",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.5,
      "category": [
        "Shops",
        "Department Stores"
      ],
      "category_id": "19018000",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BLOOMINGDALES NEW YORK NEW YORK NY 05/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9doP",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 33.19,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG NEW YORK NY 05/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqrL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 05/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXaO",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 35.5,
      "category": [
        "Travel",
        "Charter Buses"
      ],
      "category_id": "22007000",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GREYHOUND LINES CNP TX 05/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYKK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.86,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "M1 Long Island NY 05/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0eq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 35.7,
      "category": [
        "Travel",
        "Charter Buses"
      ],
      "category_id": "22007000",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MEGABUS.COM / COACHU WWW.MEGABUS.C NJ 05/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve7N",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 50,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "RAMEN OKIDOKI NY 05/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8RJ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.18,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. NEW YORK NY 05/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLEa",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.05,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. New York NY 05/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vop",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -100,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpkq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 144,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-05-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe80k",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.95,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 05/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQwe",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.08,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 05/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8ab64",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.44,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 05/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07mD",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -806,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-05-11",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 05/11 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqkY",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 52.26,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-05-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KARAOKE CITY NEW YORK NY 05/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4wm",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.42,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pO9",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.97,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-05-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9X9",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 05/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAmY",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.49,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-05-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KEY FOODS #0564 ASTORIA NY 421897 05/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbRX",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 152.43,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "A.P.C. 2129669685 NY 05/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8X5k",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 60,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BAEKJEONG NEW YORK NY 05/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38ea",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 154.69,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2017-05-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT WWW.ATT.COM TX 05/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4p5y",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-05-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAXI SVC FLUSHING LONG IS CITY NY 05/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZLy",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 42,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2017-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BARNJOO UNION SQUARE IN NEW YORK NY 05/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdAE",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.25,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 05/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3ng",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.15,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 05/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oa7P",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.41,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "M1 Long Island NY 05/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wyM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 56,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MAX BRENNER NEW YORK NY 05/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVaE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 58.79,
      "category": [
        "Shops",
        "Beauty Products"
      ],
      "category_id": "19006000",
      "date": "2017-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Sephora",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30AD",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 49,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREEHOUSE FL 05/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZNr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 367.45,
      "category": [
        "Shops",
        "Clothing and Accessories"
      ],
      "category_id": "19012000",
      "date": "2017-05-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "VINCE #909 SOHO MERCER NEW YORK NY 013548 05/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g7Z",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 236.2,
      "category": [
        "Travel",
        "Airlines and Aviation Services"
      ],
      "category_id": "22001000",
      "date": "2017-05-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "American Airlines",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvPn",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23.41,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-05-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET ASTORIA NY 05/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8ovQ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 05/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjN3d",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.58,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 05/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rOV",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -815,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-05-04",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 05/04 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROJo",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.86,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Panera Bread",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagjE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 96.66,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GAMMEEOK NEW YORK NY 05/02",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wLZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 44.33,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "HANBAT RESTAURANT NEW YORK NY 05/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRZX",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -0.06,
      "category": [
        "Interest",
        "Interest Earned"
      ],
      "category_id": "15001000",
      "date": "2017-05-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTEREST PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAyL",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2017-05-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKA5x",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-05-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6197655330",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV84k",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-05-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6197655330 05/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3w4o",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Bank Fees",
        "Excess Activity"
      ],
      "category_id": "10009000",
      "date": "2017-05-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SAVINGS WITHDRAWAL LIMIT FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRkQ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 35.54,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MATSUNOYA NEW YORK NY 05/01",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgd8",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 21.6,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-05-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqy78",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 100,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 002192 04/29349 5TH A",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0Nq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 100,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 002194 04/29349 5TH A",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dNP",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 60,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 008403 05/011260 BROA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8ab04",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 61.7,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BAEKJEONG NEW YORK NY 04/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqeL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.79,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART 38 W. 32ND ST. NEW YORK NY 04/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8Lk",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 32.24,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART NEW YORK NY 04/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpBq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.41,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "M2 Pomona NY 04/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8YJ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 26,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAXI SVC WOODSIDE WOODSIDE NY 04/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXyO",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.08,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 04/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrveNN",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20.78,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US APR29 T5PY CA 04/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYrK",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 34.39,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US APR30 XCMG CA 05/01",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vxp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.75,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2017-05-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "USA*CANTEEN VEND AMITYVILLE NY 05/01",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLya",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 100,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-04-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 006579 04/281260 BROA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyYo",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.96,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-04-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET ASTORIA NY 04/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ5e",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 04/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07RD",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Bank Fees",
        "Excess Activity"
      ],
      "category_id": "10009000",
      "date": "2017-04-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SAVINGS WITHDRAWAL LIMIT FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgAr",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.12,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2017-04-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CVS/PHARMACY #02 02457 NEW YORK NY 847514 04/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB969",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 30.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KONDO RESTAURANT NY 04/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pM9",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 37.56,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-04-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI6G20 MANHASSET NY 04/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqLY",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-04-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. New York NY 04/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4Em",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 29.37,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DADAM New York NY 04/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAyY",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 11.7,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUBWAY 031925 LONG ISLAND C NY 04/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbwX",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.06,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KING OF FALAFEL & S Queens NY 04/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3Qg",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-04-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI5H11 LONG ISLAND NY 04/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38ja",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.79,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-04-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3Zvy",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 11.18,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-04-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pky",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.24,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "WA BAR NEW YORK NY 04/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XMk",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.13,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 04/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx308D",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.2,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wqM",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.78,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "McDonald's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oamP",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Bank Fees",
        "ATM"
      ],
      "category_id": "10002000",
      "date": "2017-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM FEE-WITH",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1waq",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 102,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NON-CHASE ATM WITHDRAW 060474 04/23315 5th A",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx309A",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.69,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "RUBY'S CANDY & GROCERY ASTORIA NY 04/21",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVoE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 57.71,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SANFORDSRESTAURANT ASTORIA NY 04/21",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdzE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.08,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 04/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gpZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.08,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 04/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZMr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -831,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-04-20",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 04/20 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8o1Q",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 11.32,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-04-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CAFFE BENE SUNNYSIDE SUNNYSIDE NY 04/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rPV",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.75,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2017-04-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "USA*CANTEEN VEND AMITYVILLE NY 04/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvMn",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.91,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2017-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CVS/PHARMACY #01 01058 SUNNYSIDE NY 808625 04/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAjx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DADAM New York NY 04/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wBZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 121,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyM8",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6160781470",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNBd",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6160781470 04/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZ3w",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Service",
        "Personal Care"
      ],
      "category_id": "18045000",
      "date": "2017-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PAYGATE_KIWDISK 45527 SEOUL 04/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8nk",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.16,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUBWAY 031925 LONG ISLAND C NY 04/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRAX",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25,
      "category": [
        "Recreation"
      ],
      "category_id": "17000000",
      "date": "2017-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUNCTRYAIR 33782056705 EAGAN MN 04/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROEo",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20.51,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-04-19",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkag0E",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 66.33,
      "category": [
        "Shops",
        "Department Stores"
      ],
      "category_id": "19018000",
      "date": "2017-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DFS GROUP LP LAX LOS ANGELES CA 04/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpyq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.61,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LOS ANGELES 3154B LOS ANGELES CA 04/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8eJ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.86,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgw8",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 46.3,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-04-18",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI1R17 LONG ISLAND NY 04/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqPL",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.99,
      "category": [
        "Shops",
        "Convenience Stores"
      ],
      "category_id": "19015000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "7-Eleven",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRAM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 36,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Fandango",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve0N",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 84.74,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "JAE BU DO LOS ANGELES CA 04/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpyn",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8kk",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.05,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8eX",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.55,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAjq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9deL",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.79,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkag0z",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.8,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYZK",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.6,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wBm",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6154087848",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0Bq",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6154087848 04/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o65",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 294.13,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "THIRD ST PROMENADE #1 SANTA MONICA CA 04/14",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8nb",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.34,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "THREE BROOMSTICKS UNIVERSAL CTY CA 04/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9deP",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.51,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOKYO JAPANESE LIFESTY LOS ANGELES CA 04/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0B6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.72,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TST* DIRT DOG LOS ANGELES CA 04/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgwV",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22.61,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TST* DIRT DOG LOS ANGELES CA 04/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyMX",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 34,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-04-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "X LANES LOS ANGELES CA 04/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqPq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.48,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8kq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYZL",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 438,
      "category": [
        "Community",
        "Education",
        "Colleges and Universities"
      ],
      "category_id": "12008009",
      "date": "2017-04-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UNIV STUDIOS O40000010 CA 04/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve0E",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 375,
      "category": [
        "Tax",
        "Payment"
      ],
      "category_id": "20002000",
      "date": "2017-04-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "IRS USATAXPYMT PPD ID: 3387702000",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8v4q",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 307,
      "category": [
        "Tax",
        "Payment"
      ],
      "category_id": "20002000",
      "date": "2017-04-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYS DTF PIT Tax Paymnt PPD ID: N146013200",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLP0",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6146341215",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQX5x",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6146341215 04/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jva5",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 35.41,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-04-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CAL MART BEER & WINE LOS ANGELES CA 04/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ1P",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 33.89,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-04-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART LOS ANGELES LOS ANGELES CA 188177 04/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB94d",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25,
      "category": [
        "Travel",
        "Airlines and Aviation Services"
      ],
      "category_id": "22001000",
      "date": "2017-04-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "JetBlue",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abnP",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.33,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqJa",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.53,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7p8n",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.04,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g071g",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.51,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-12",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOKYO JAPANESE LIFESTY LOS ANGELES CA 04/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4dx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.06,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DUNKIN #356521 Q3 BOSTON MA 04/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL31V",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GAMMEEOK NEW YORK NY 04/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvb3A",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 78,
      "category": [
        "Shops",
        "Digital Purchase"
      ],
      "category_id": "19019000",
      "date": "2017-04-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Groupon",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XLE",
      "transaction_type": "digital"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.62,
      "category": [
        "Shops",
        "Newsstands"
      ],
      "category_id": "19038000",
      "date": "2017-04-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "HUDSON ST 1509 BOSTON MA 04/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38Bg",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 29.4,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "RAMEN OKIDOKI NY 04/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAJa",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.57,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-04-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4prP",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.5,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-11",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US APR10 V7ED CA 04/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3Z4K",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 100,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 006296 04/09349 5TH A",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4ro1",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 154.65,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT WWW.ATT.COM TX 04/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wYm",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.5,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CMSVEND*CV FARMINGDALE AMITYVILLE NY 04/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gyv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.23,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET ASTORIA NY 04/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wrx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.41,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 04/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8obD",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.72,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "M1 New York NY 04/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30PQ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.15,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI5C17 ASTORIA NY 04/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjN63",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6136391007",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oapy",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 1000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6136391007 04/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4r7k",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 150.97,
      "category": [
        "Travel",
        "Lodging"
      ],
      "category_id": "22012000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PLN*PRICELINE HOTELS CT 04/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVk8",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.99,
      "category": [
        "Shops",
        "Digital Purchase"
      ],
      "category_id": "19019000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Pixonic LLC g.co/payhelp# CA 04/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Google Wallet",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8Eb",
      "transaction_type": "digital"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.49,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Rite Aid",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROYE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 26.65,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Shake Shack",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZwK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.21,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagzz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.08,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 04/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdJQ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "WOORI JIP NEW YORK NY 04/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvb9",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.61,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUBWAY 031925 LONG ISLAND C NY 04/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyNX",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.63,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-04-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. NEW YORK NY 04/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAQq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 49,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-04-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREEHOUSE FL 04/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmp1n",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Telephone transfer from SAV XXXXXX1371",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRBM",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-04-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Telephone transfer to CHK XXXXX6254 04/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNJq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 21.74,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2017-04-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Walgreens",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgRV",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -1475,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 04/06 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQRO17",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -1050,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 04/06 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagED",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -776,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 04/06 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Po",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -325,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 04/06 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3w4r",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -127.5,
      "category": [
        "Transfer",
        "Deposit",
        "Check"
      ],
      "category_id": "21007001",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CHECK DEPOSIT 04/06 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRkR",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.76,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CVS/PHARM 02457--320FI NEW YORK NY 04/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYnL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.75,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 04/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP87X",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KARAOKE CITY NEW YORK NY 04/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqoq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 58,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KARAOKE CITY NEW YORK NY 04/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0O6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 14.24,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "McDonald's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d0L",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -0.08,
      "category": [
        "Interest",
        "Interest Earned"
      ],
      "category_id": "15001000",
      "date": "2017-04-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTEREST PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAyb",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2017-04-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXOx",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.44,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US APR05 7FYR CA 04/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrvenE",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.75,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2017-04-05",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "USA*CANTEEN VEND AMITYVILLE NY 04/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8Eq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-04-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8v0q",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 26.02,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-04",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAMASHII ASTORIA NY 04/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLK0",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.54,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pBn",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.63,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2017-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "M2 Pomona NY 03/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ6P",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.79,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2017-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "M2 Pomona NY 03/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abQP",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 37.06,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07eg",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 28.25,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREATSA PIZZA CORP NEW YORK NY 04/02",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqAa",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.75,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2017-04-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "USA*CANTEEN VEND AMITYVILLE NY 04/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4nx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.25,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 03/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkA0a",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.3,
      "category": [
        "Shops",
        "Bookstores"
      ],
      "category_id": "19009000",
      "date": "2017-03-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KORYO BOOKS NEW YORK NY 03/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9jd",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 72.11,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FIVE SENSES NEW YORK NY 03/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbLA",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 35.4,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KONDO RESTAURANT NY 03/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3Z8K",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.14,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-03-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. New York NY 03/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38Eg",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.3,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-03-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XJE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.42,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 03/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4p3P",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.33,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUBWAY 031925 LONG ISLAND C NY 03/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3bV",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22.16,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-03-29",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7 LONG ISLAND C NY 03/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oa8y",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.93,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CAFFE BENE SUNNYSIDE SUNNYSIDE NY 03/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wzx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.95,
      "category": [
        "Service",
        "Travel Agents and Tour Operators"
      ],
      "category_id": "18067000",
      "date": "2017-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "COA*CHEAPOAIR.COM AI CHEAPOAIR.COM NY 03/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZ9K",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 53,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ENTHAICE THAI KITCHEN ASTORIA NY 03/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8o5D",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GAMMEEOK NEW YORK NY 03/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyV68",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 21,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NATURAL TOFU SUNNYSIDE NY 03/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx305Q",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -800,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6108099140",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdvQ",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 800,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6108099140 03/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyYP",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Bank Fees",
        "Excess Activity"
      ],
      "category_id": "10009000",
      "date": "2017-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SAVINGS WITHDRAWAL LIMIT FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgAp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.98,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-03-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g8v",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 673,
      "category": [
        "Travel",
        "Lodging"
      ],
      "category_id": "22012000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "AIRBNB * HM4QYHEMWB CA 03/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRmM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 14.55,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DD/BR #346449 Q35 ASTORIA NY 03/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagMz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.96,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET ASTORIA NY 03/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rg1",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 256.49,
      "category": [
        "Travel",
        "Airlines and Aviation Services"
      ],
      "category_id": "22001000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "JetBlue",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNv3",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -700,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6104930111",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvg9",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 700,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6104930111 03/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1L3mD6v7Cqwmp9M",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Bank Fees",
        "Excess Activity"
      ],
      "category_id": "10009000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SAVINGS WITHDRAWAL LIMIT FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8O1",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 350.8,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUNCTRYAIR 33779932263 NEW YORK NY 03/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQRO0E",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.23,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. NEW YORK NY 03/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8bb",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "WOORI JIP NEW YORK NY 03/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wqm",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 32.58,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-03-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "AMC EMPIRE 25 #0552 NEW YORK NY 03/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDg5V",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 82.2,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "OOTOYA TIMES SQUARE NEW YORK NY 03/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyxX",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -800,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6099591654",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAmq",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 800,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6099591654 03/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9KqVM",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Bank Fees",
        "Excess Activity"
      ],
      "category_id": "10009000",
      "date": "2017-03-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SAVINGS WITHDRAWAL LIMIT FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0vY",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22.69,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUBWAY 031925 LONG ISLAND C NY 03/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmp5n",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.56,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2017-03-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "E-K New York NY 03/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0D6",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.31,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2017-03-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "M1 Pomona NY 03/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqgq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.99,
      "category": [
        "Shops",
        "Digital Purchase"
      ],
      "category_id": "19019000",
      "date": "2017-03-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Symbolab g.co/payhelp# CA 03/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Google Wallet",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP86X",
      "transaction_type": "digital"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.5,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2017-03-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "USA*CANTEEN VEND AMITYVILLE NY 03/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d3L",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.87,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 03/21",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagM4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.33,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "McDonald's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8bZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Shops",
        "Clothing and Accessories",
        "Men's Store"
      ],
      "category_id": "19012004",
      "date": "2017-03-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Men's Wearhouse",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve4E",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6095257535",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopY8L",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6095257535 03/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dZX",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Bank Fees",
        "Excess Activity"
      ],
      "category_id": "10009000",
      "date": "2017-03-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SAVINGS WITHDRAWAL LIMIT FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopYkB",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.41,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-03-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8gq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 62,
      "category": [
        "Community",
        "Organizations and Associations",
        "Charities and Non-Profits"
      ],
      "category_id": "12015003",
      "date": "2017-03-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "EDUCO INTERNATIONAL I GA 03/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wq6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 90.26,
      "category": [
        "Shops",
        "Beauty Products"
      ],
      "category_id": "19006000",
      "date": "2017-03-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LUSH LEXINGTON (750) NEW YORK NY 03/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRm7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 51.55,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TONY DI NAPOLI 3RD AVE NEW YORK NY 03/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAmJ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.5,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CMSVEND*CV FARMINGDALE AMITYVILLE NY 03/17",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8VP",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 21.75,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG NEW YORK NY 03/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8N4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GAMMEEOK NEW YORK NY 03/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrvePy",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.2,
      "category": [
        "Travel",
        "Airports"
      ],
      "category_id": "22002000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LAGUARDIA-CC-BK 31-1 LONG ISLAND C NY662131 03/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abRv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dqA",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23.95,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXgE",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.98,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "McDonald's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLa1",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22.8,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI5K88 BROOKLYN NY 03/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx05E",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -300,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6087052435",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyxj",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6090209956",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgYn",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 300,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6087052435 03/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveop",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6090209956 03/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe84Y",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Bank Fees",
        "Excess Activity"
      ],
      "category_id": "10009000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SAVINGS WITHDRAWAL LIMIT FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXEd",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.76,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpZN",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40.49,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "THIRD FLOOR CAFE NEW YORK NY 03/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqYz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.92,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 03/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYNv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 29.03,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-03-20",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7 LONG ISLAND C NY 03/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vkK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.15,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-03-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GREGORYS COFFEE 31 New York NY 03/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQrp",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 65.56,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "HANBAT RESTAURANT NEW YORK NY 03/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07PM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 88.99,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG NEW YORK NY 03/14",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqyR",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.62,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-03-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. NEW YORK NY 03/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9Er",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.01,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-03-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pqd",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 31.29,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAMASHII ASTORIA NY 03/15",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4bL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.24,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 03/14",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZEv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 65.55,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KENKA RESTAURANT NEW YORK NY 03/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAVr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23.46,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-03-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbgR",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -300,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6074759217",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8X9d",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 300,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6074759217 03/14",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vAY",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.53,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUBWAY 031925 LONG ISLAND C NY 03/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pV3",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.1,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-03-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38mB",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.76,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-03-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3OO",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 32.95,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-03-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US MAR13 I6NA CA 03/14",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oa5B",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 200,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 002747 03/11349 5TH A",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLYX",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 03/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gPQ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20.7,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wZp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 11.28,
      "category": [
        "Transfer",
        "Third Party",
        "Square"
      ],
      "category_id": "21010003",
      "date": "2017-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "M2 New York NY 03/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jd56",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.8,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "QUEENS MEDALLION ENTE LONG ISLAND NY 03/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyV7j",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.76,
      "category": [
        "Shops",
        "Pharmacies"
      ],
      "category_id": "19043000",
      "date": "2017-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Rite Aid",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZEZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "WOORI JIP NEW YORK NY 03/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30Zv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.25,
      "category": [
        "Shops",
        "Arts and Crafts"
      ],
      "category_id": "19003000",
      "date": "2017-03-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ARTIST & CRAFTSMAN LIC LONG ISLAND NY696306 03/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagX4",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 100,
      "category": [
        "Transfer",
        "Withdrawal",
        "ATM"
      ],
      "category_id": "21012002",
      "date": "2017-03-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ATM WITHDRAWAL 000158 03/101260 BROA",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8ab5E",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.2,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-03-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET ASTORIA NY 03/08",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8oZm",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.75,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 03/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNa7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.99,
      "category": [
        "Shops",
        "Digital Purchase"
      ],
      "category_id": "19019000",
      "date": "2017-03-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Pixonic LLC g.co/payhelp# CA 03/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Google Wallet",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jv5V",
      "transaction_type": "digital"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.53,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUBWAY 031925 LONG ISLAND C NY 03/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROj6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.8,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 03/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rwx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 125.21,
      "category": [
        "Shops",
        "Department Stores"
      ],
      "category_id": "19018000",
      "date": "2017-03-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Macy's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wm6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.45,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Panera Bread",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8zZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 62.68,
      "category": [
        "Shops"
      ],
      "category_id": "19000000",
      "date": "2017-03-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Amazon",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqy6j",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-03-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FRESH FRUIT & GROCERY ASTORIA NY 03/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRo7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.4,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-03-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAZJ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.75,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2017-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CMSVEND*CV FARMINGDALE AMITYVILLE NY 03/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqnz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2608.45,
      "category": [
        "Service",
        "Financial",
        "Loans and Mortgages"
      ],
      "category_id": "18020004",
      "date": "2017-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LAG01 CUNY LAGUA PAYMENT SV 000001163181 WEB ID: 9751000422",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dEA",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -3000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6059086447",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgjn",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 3000,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6059086447 03/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQ7D",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Service",
        "Personal Care"
      ],
      "category_id": "18045000",
      "date": "2017-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PAYGATE_KIWDISK 45527 SEOUL 03/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8EP",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 21.6,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpzN",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 49,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREEHOUSE FL 03/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopY4v",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.74,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-03-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US MAR07 JL3E CA 03/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0gE",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22.23,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG NEW YORK NY 03/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAZr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 03/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4yL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.4,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 03/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9qr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.94,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXoE",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 116.5,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pgd",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23.3,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI1R58 NEW YORK NY 03/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqXR",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.8,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI5P63 LONG ISLAND NY 03/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3Zqv",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.3,
      "category": [
        "Travel",
        "Taxi"
      ],
      "category_id": "22016000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NYCTAXI5P63 LONG ISLAND NY 03/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8Xxd",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 45.73,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ON NOW NEW YORK NY 03/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvb6R",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -390,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6053771886",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrveby",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 390,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6053771886 03/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07BO",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 46.91,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PELICANA USA SUNNYSIDE NY 03/02",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8A4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.76,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLn1",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.97,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vLK",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 44.73,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TAMASHII ASTORIA NY 03/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8ab4v",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREATSA PIZZA CORP NEW YORK NY 03/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07AM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 21,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-03-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREATSA PIZZA CORP NEW YORK NY 03/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQqp",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -800,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-03-03",
      "location": {
        "address": null,
        "city": "Sunnyside",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 03/02 4610 QUEENS BLVD",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaeZ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.57,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-03-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET ASTORIA NY 03/01",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pX3",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -0.09,
      "category": [
        "Interest",
        "Interest Earned"
      ],
      "category_id": "15001000",
      "date": "2017-03-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTEREST PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4oa",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2017-03-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaBB",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.42,
      "category": [
        "Shops",
        "Beauty Products"
      ],
      "category_id": "19006000",
      "date": "2017-03-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "NATURE REPUBLIC NEW YORK NY 03/02",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3XO",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6052614226",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38KB",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-03-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6052614226 03/03",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pvA",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 148.75,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2017-03-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT WWW.ATT.COM TX 03/01",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30Mv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.99,
      "category": [
        "Shops",
        "Digital Purchase"
      ],
      "category_id": "19019000",
      "date": "2017-03-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Pixonic LLC g.co/payhelp# CA 03/02",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Google Wallet",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyV1j",
      "transaction_type": "digital"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.14,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-03-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. NEW YORK NY 03/02",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gbQ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.75,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-03-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jda6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.76,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-03-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Starbucks",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1w3p",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.25,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 02/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8oNm",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.82,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-28",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREATSA PIZZA CORP NEW YORK NY 02/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZ6Z",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -2240,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 02/26 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB900",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -266,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 02/26 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbrB",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -35,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 02/26 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3Z7A",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -420,
      "category": [
        "Transfer",
        "Deposit",
        "Check"
      ],
      "category_id": "21007001",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CHECK DEPOSIT 02/26 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkAj8",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 34.07,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BCD TOFU HOUSE NEW YORK NY 02/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8AP",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 41.4,
      "category": [
        "Shops",
        "Convenience Stores"
      ],
      "category_id": "19015000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CIRCLE NYC INC NEW YORK NY 02/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROZ6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.5,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FOOD GALLERY 32 NY NY 02/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRM7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.56,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 02/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKA9J",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 02/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8KZ",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 106,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KARAOKE WOW NEW YORK NY 02/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkago4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.33,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "McDonald's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNx7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6032940983",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvwV",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6032940983 02/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XqY",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.39,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Panera Bread",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpeN",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "ROLL & KATSU KITCHE New York NY 02/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wO6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.89,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "RUBY'S CANDY & GROCERY ASTORIA NY 02/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rkx",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.53,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SUBWAY 031925 LONG ISLAND C NY 02/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgkn",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "WOORI JIP NEW YORK NY 02/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqynj",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 27.25,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 02/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0aE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 14.52,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-24",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqxz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.99,
      "category": [
        "Shops",
        "Digital Purchase"
      ],
      "category_id": "19019000",
      "date": "2017-02-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Altitude Gam g.co/payhelp# CA 02/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Google Wallet",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYDv",
      "transaction_type": "digital"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CHIPOTLE 2135 NEW YORK NY 02/22",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrvexy",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 35.01,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d4A",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-02-22",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8O4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 39.75,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BANGIA NEW YORK NY 02/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wvV",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.58,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DADAM New York NY 02/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0aM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG NEW YORK NY 02/19",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpe6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 02/18",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgkq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.99,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART NEW YORK NY 02/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8aB",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.59,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8Aa",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 17.63,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLR3j",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 40.69,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyJ0",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -300,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6019465459",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagb5",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 300,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6019465459 02/21",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38qw",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.57,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. New York NY 02/20",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d4o",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.42,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAq6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23.57,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-21",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqx7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 9.15,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-02-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GREGORYS COFFEE 31 New York NY 02/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8OE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 52.11,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrvex0",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.33,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-17",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYDr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQX4B",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.34,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vDk",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.57,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-02-16",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. NEW YORK NY 02/16",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXL7n",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.15,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-15",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "WOORI JIP NEW YORK NY 02/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abqq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4B4",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 32.84,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7por",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 41.99,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqe5",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 45.48,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9gp",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.21,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PARIS BAGUETTE-NEW YOR NEW YORK NY 02/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQe4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 27,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-14",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PHO 32 NEW YORK NY 02/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g074y",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 46.26,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG NEW YORK NY 02/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38L4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.6,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 02/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wO1",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 2.17,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART NEW YORK NY 02/12",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZDn",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 120,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KARAOKE CITY NEW YORK NY 02/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVnD",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 54.38,
      "category": [
        "Shops",
        "Beauty Products"
      ],
      "category_id": "19006000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "LUSH HERALD SQUARE(762) NEW YORK NY 02/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30ON",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3zM",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.34,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8ogk",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8X7v",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 66.87,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaz9",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 135.77,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZNz",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 47.06,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MUI NEW YORK NY 02/10",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jd6P",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvom",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6001081178",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvb0j",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 6001748183",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAbo",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6001081178 02/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4pP0",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 6001748183 02/13",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL390",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.88,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pOb",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 11.6,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-13",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US FEB11 SLBG CA 02/11",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3grL",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23.89,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 02/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQRO71",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagR5",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.98,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rZa",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.72,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-10",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 02/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjN1M",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.26,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-02-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART 38 W. 32ND ST. NEW YORK NY 02/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8rB",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 19.42,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-02-09",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART 38 W. 32ND ST. NEW YORK NY 02/09",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wEV",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 1.75,
      "category": [
        "Food and Drink"
      ],
      "category_id": "13000000",
      "date": "2017-02-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "CMSVEND*CV FARMINGDALE AMITYVILLE NY 02/07",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyX0",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.32,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KOBEQUE NEW YORK NY 02/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRgj",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-08",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAE6",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Travel",
        "Public Transportation Services"
      ],
      "category_id": "22014000",
      "date": "2017-02-07",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Metropolitan Transportation Authority",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgPq",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DADAM New York NY 02/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0wM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.75,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 02/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYdr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 44,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "JONGRO BBQ NEW YORK NY 02/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8BE",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrveX0",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 5985193589",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmp36",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 5985193589 02/06",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaMZ",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.76,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PARIS BAGUETTE-NEW YOR NEW YORK NY 02/02",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8qa",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.97,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. New York NY 02/04",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dgo",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 31.8,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kq87",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 31.89,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-02-06",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7 LONG ISLAND C NY 02/05",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQX9B",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.73,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-02-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET ASTORIA NY 02/01",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vRk",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.74,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 02/02",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abwq",
      "transaction_type": "place"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -0.08,
      "category": [
        "Interest",
        "Interest Earned"
      ],
      "category_id": "15001000",
      "date": "2017-02-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "INTEREST PAYMENT",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jd1w",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 12.74,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXL6n",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Bank Fees"
      ],
      "category_id": "10000000",
      "date": "2017-02-03",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "MONTHLY SERVICE FEE",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ44",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.87,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-02-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "FAMILY MARKET ASTORIA NY 01/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqO5",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.84,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-02-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pwr",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 10.89,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "STRAND SMOKEHOUSE ASTORIA NY 02/01",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4Z4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.57,
      "category": [
        "Shops",
        "Food and Beverage Store"
      ],
      "category_id": "19025000",
      "date": "2017-02-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "SWEET CHURROS, INC. NEW YORK NY 02/02",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9yp",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 31.85,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-02",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07Dy",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-02-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "85281700721 HKTW 4552 SEOUL 01/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAEo",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 22.54,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-02-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbpj",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 32.96,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-02-01",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TRADE FAIR #7 LONG ISLAND C NY 01/31",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZPz",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.47,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 01/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaN9",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 13.91,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-01-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pgb",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 31.04,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-01-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XNv",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 120,
      "category": [
        "Shops",
        "Clothing and Accessories"
      ],
      "category_id": "19012000",
      "date": "2017-01-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOMI JAZZ NEW YORK NY 01/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38b4",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 5.1,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-31",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 01/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3RM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 4.99,
      "category": [
        "Shops",
        "Convenience Stores"
      ],
      "category_id": "19015000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "7-Eleven",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4r9a",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 178.75,
      "category": [
        "Service",
        "Telecommunication Services"
      ],
      "category_id": "18063000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BILL PAYMENT WWW.ATT.COM TX 01/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "AT&T",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8YB",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 23,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "BROADWAY STATION ASTORIA NY 01/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gQL",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 30.03,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "DONG CHUN HONG NEW YORK NY 01/29",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQRO31",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6,
      "category": [
        "Food and Drink",
        "Restaurants",
        "Coffee Shop"
      ],
      "category_id": "13005043",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GREGORYS COFFEE 31 New York NY 01/28",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNrM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 61.33,
      "category": [
        "Food and Drink",
        "Bar"
      ],
      "category_id": "13001000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KARAOKE WOW NEW YORK NY 01/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30bN",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 70,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "KONDO RESTAURANT NY 01/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagD5",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wK1",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 5967620689",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVjD",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": -500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer from SAV ...1371 transaction#: 5969127354",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdOP",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 200,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 5967620689 01/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyV4L",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": 500,
      "category": [
        "Transfer",
        "Internal Account Transfer"
      ],
      "category_id": "21001000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Online Transfer to CHK ...6254 transaction#: 5969127354 01/30",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gB7",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 18.33,
      "category": [
        "Service",
        "Food and Beverage"
      ],
      "category_id": "18021000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Seamless",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZkn",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.09,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UA KAUFMAN ASTORIA 14 ASTORIA NY 01/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jv8m",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 39.9,
      "category": [
        "Recreation",
        "Arts and Entertainment"
      ],
      "category_id": "17001000",
      "date": "2017-01-30",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UA KAUFMAN ASTORIA 14 ASTORIA NY 01/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8onk",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 15.5,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 01/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRxj",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 37.03,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "THIRD FLOOR CAFE NEW YORK NY 01/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyL0",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 14.15,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TREATSA PIZZA CORP NEW YORK NY 01/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAB6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 26.6,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-01-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US JAN26 HX7U CA 01/27",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgVq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 70,
      "category": [
        "Transfer",
        "Third Party",
        "Venmo"
      ],
      "category_id": "21010001",
      "date": "2017-01-27",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Venmo",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Braintree",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wRV",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -800,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-01-26",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 01/26 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30pA",
      "transaction_type": "special"
    },
    {
      "account_id": "M0AkomrVXdtRzq3xQyYOszKkanOYBXtMeV3qZ",
      "account_owner": null,
      "amount": -700,
      "category": [
        "Transfer",
        "Deposit",
        "ATM"
      ],
      "category_id": "21007002",
      "date": "2017-01-26",
      "location": {
        "address": null,
        "city": "New York",
        "lat": null,
        "lon": null,
        "state": "NY",
        "store_number": null,
        "zip": null
      },
      "name": "ATM CASH DEPOSIT 01/26 1260 BROADWAY",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1weq",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 6.84,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "GRACE STREET NEW YORK NY 01/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqa7",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 3.26,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-01-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART 38 W. 32ND ST. NEW YORK NY 01/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dno",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 20.91,
      "category": [
        "Shops",
        "Supermarkets and Groceries"
      ],
      "category_id": "19047000",
      "date": "2017-01-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "H MART 38 W. 32ND ST. NEW YORK NY 01/26",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0dM",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.08,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "PAIN D'AVIGNON AT T New York NY 01/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": "Square",
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8Na",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 8.2,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-26",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "TOUS LES JOURS NEW YORK NY 01/24",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpY6",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 55,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "HER NAME IS HAN NEW YORK NY 01/23",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYRr",
      "transaction_type": "place"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 7.2,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-01-25",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "UBER *US JAN25 YPQJ CA 01/25",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve80",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 16.88,
      "category": [
        "Travel",
        "Car Service",
        "Ride Share"
      ],
      "category_id": "22006001",
      "date": "2017-01-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Lyft",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpY0",
      "transaction_type": "special"
    },
    {
      "account_id": "VmAJdwyYB3iwMqpE8aBrFpMYBAE8bDUrwLN87",
      "account_owner": null,
      "amount": 25.41,
      "category": [
        "Food and Drink",
        "Restaurants"
      ],
      "category_id": "13005000",
      "date": "2017-01-23",
      "location": {
        "address": null,
        "city": null,
        "lat": null,
        "lon": null,
        "state": null,
        "store_number": null,
        "zip": null
      },
      "name": "Papa John's",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "pending": false,
      "pending_transaction_id": null,
      "transaction_id": "ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8N8",
      "transaction_type": "place"
    }
  ]
}

module.exports = {
  demoAccounts,
  demoTransaction,
  phoneBill,
  rentBill
};
