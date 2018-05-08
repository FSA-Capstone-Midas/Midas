/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require("../server/db");
const { User, House, State, Apartment } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const houses = await Promise.all([
    House.create({
      name: "House",
      price: 430000
    }),
    House.create({
      name: "House",
      price: 625000
    }),
    House.create({
      name: "House",
      price: 462000
    }),
    House.create({
      name: "House",
      price: 442000
    }),
    House.create({
      name: "House",
      price: 379000
    }),
    House.create({
      name: "House",
      price: 332719
    }),
    House.create({
      name: "House",
      price: 331000
    }),
    House.create({
      name: "House",
      price: 325000
    }),
    House.create({
      name: "House",
      price: 315000
    }),
    House.create({
      name: "House",
      price: 297500
    }),
    House.create({
      name: "House",
      price: 290000
    }),
    House.create({
      name: "House",
      price: 290000
    }),
    House.create({
      name: "House",
      price: 256000
    }),
    House.create({
      name: "House",
      price: 253500
    }),
    House.create({
      name: "House",
      price: 249300
    }),
    House.create({
      name: "House",
      price: 245000
    }),
    House.create({
      name: "House",
      price: 240000
    }),
    House.create({
      name: "House",
      price: 225000
    })
  ]);

  const states = await Promise.all([
    State.create({
      state: "New York",
      Abbreviation: "NY"
    }),
    State.create({
      state: "District Of Columbia",
      Abbreviation: "DC"
    }),
    State.create({
      state: "California",
      Abbreviation: "CA"
    }),
    State.create({
      state: "Hawaii",
      Abbreviation: "HI"
    }),
    State.create({
      state: "Massachusetts",
      Abbreviation: "MA"
    }),
    State.create({
      state: "Washington",
      Abbreviation: "WA"
    }),
    State.create({
      state: "Colorado",
      Abbreviation: "CO"
    }),
    State.create({
      state: "Vermont",
      Abbreviation: "VT"
    }),
    State.create({
      state: "Oregon",
      Abbreviation: "OR"
    }),
    State.create({
      state: "Virginia",
      Abbreviation: "VA"
    }),
    State.create({
      state: "Maryland",
      Abbreviation: "MD"
    }),
    State.create({
      state: "New Jersey",
      Abbreviation: "NJ"
    }),
    State.create({
      state: "Rhode Island",
      Abbreviation: "RI"
    }),
    State.create({
      state: "Connecticut",
      Abbreviation: "CT"
    }),
    State.create({
      state: "Nevada",
      Abbreviation: "NV"
    }),
    State.create({
      state: "New Hampshire",
      Abbreviation: "NH"
    }),
    State.create({
      state: "Minnesota",
      Abbreviation: "MN"
    }),
    State.create({
      state: "Arizona",
      Abbreviation: "AZ"
    })
  ]);
  console.log(`seeded ${states.length} states`);

  const apartments = await Promise.all([
    Apartment.create({
      oneBR: 1260,
      twoBR: 1500
    }),
    Apartment.create({
      oneBR: 1450,
      twoBR: 1670
    }),
    Apartment.create({
      oneBR: 1430,
      twoBR: 1830
    })
  ]);
  console.log(`seeded ${houses.length} houses`);

  const users = await Promise.all([
    User.create({
      email: "cody@email.com",
      password: "123",
      firstName: "josh",
      lastName: "kim",
      phoneNumber: "341421412",
      address: "brooklyn",
      jobTitle: "software engineer",
      plaidTokenId: "access-development-a18d6010-d862-4906-b6a6-f3e22d15180e"
    }),
    User.create({
      email: "murphy@email.com",
      password: "123",
      firstName: "casy",
      lastName: "chan",
      phoneNumber: "31241242",
      address: "Queens",
      jobTitle: "software engineer"
    })
  ]);
  console.log(`seeded ${apartments.length} apartments`);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`);
  console.log("seeded successfully");
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log("closing db connection");
    db.close();
    console.log("db connection closed");
  });

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log("seeding...");
