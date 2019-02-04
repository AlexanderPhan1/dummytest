const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/chefinately"
);

const chefSeed = [
  {
    chefName: "Christine May",
    email: 'cheggg@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:"",
    cuisines: ""
  },
  {
    chefName: "Derrick Wence",
    email: 'jones@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:"",
    cuisines: ""
  },
  {
    chefName: "Jasmine Faith",
    email: 'crist@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:"",
    cuisines: ""
  },
  {
    chefName: "Micheal Wallace",
    email: 'hollyminer@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:"",
    cuisines: ""
  },
  {
    chefName: "Debra Luise",
    email: 'ddff@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:"",
    cuisines: ""
  },
  {
    chefName: "Mary Matz",
    email: 'tfrerf@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:"",
    cuisines: ""
  }
];

db.Chef
  .remove({})
  .then(() => db.Chef.collection.insertMany(chefSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
