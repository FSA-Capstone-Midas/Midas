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
const { User, State } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const states = await Promise.all([
    State.create({
      state: "New York",
      abbreviation: "NY",
      apartment1Br: 1260,
      apartment2Br: 1500,
      houseAvgListing: 555227,
      houseAvgSales: 430000,
      truliaPopularity: 4
    }),
    State.create({
      state: "District Of Columbia",
      abbreviation: "DC",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "California",
      abbreviation: "CA",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 697539,
      houseAvgSales: 462000
    }),
    State.create({
      state: "Hawaii",
      abbreviation: "HI",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 905687,
      houseAvgSales: 4425000
    }),
    State.create({
      state: "Massachusetts",
      abbreviation: "MA",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 602210,
      houseAvgSales: 379000
    }),
    State.create({
      state: "Washington",
      abbreviation: "WA",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 378565,
      houseAvgSales: 332719
    }),
    State.create({
      state: "Colorado",
      abbreviation: "CO",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "Vermont",
      abbreviation: "VT",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "Oregon",
      abbreviation: "OR",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "Virginia",
      abbreviation: "VA",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "Maryland",
      abbreviation: "MD",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "New Jersey",
      abbreviation: "NJ",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "Rhode Island",
      abbreviation: "RI",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "Connecticut",
      abbreviation: "CT",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "Nevada",
      abbreviation: "NV",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "New Hampshire",
      abbreviation: "NH",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "Minnesota",
      abbreviation: "MN",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    }),
    State.create({
      state: "Arizona",
      abbreviation: "AZ",
      apartment1Br: 1450,
      apartment2Br: 1670,
      houseAvgListing: 773286,
      houseAvgSales: 625000
    })
  ]);
  console.log(`seeded ${states.length} states`);

  // const apartments = await Promise.all([
  //   Apartment.create({
  //     oneBR: 1260,
  //     twoBR: 1500
  //   }),
  //   Apartment.create({
  //     oneBR: 1450,
  //     twoBR: 1670
  //   }),
  //   Apartment.create({
  //     oneBR: 1430,
  //     twoBR: 1830
  //   })
  // ]);
  // console.log(`seeded ${houses.length} houses`);

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
