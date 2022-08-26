require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

// let Person;

const createAndSavePerson = function (done) {
  const daniel = new Person({
    name: "Daniel Bianco",
    age: 38,
    favoriteFoods: ["eggs", "fish", "fresh fruit"],
  });

  daniel.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Create Many Records with model.create()
const arrayOfPeople = [
  {
    name: "Daniel",
    age: 38,
    favoriteFoods: ["eggs", "fish", "fresh fruit"],
  },
  {
    name: "Guille",
    age: 36,
    favoriteFoods: ["meat", "pasta"],
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

// Use model.find() to Search Your Database
const personName = "Daniel";

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

// Use model.findOne() to Return a Single Matching Document from Your Database
const food = "pasta";

const findOneByFood = (food, done) => {
  Person.findOne({ food: [food] }, function (err, food) {
    if (err) return console.log(err);
    done(null, food);
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
