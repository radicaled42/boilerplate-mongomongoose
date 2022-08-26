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
  Person.findOne({ favoriteFoods: food }, function (err, food) {
    if (err) return console.log(err);
    done(null, food);
  });
};

// Use model.findById() to Search Your Database By _id
const personId = "6308fb0220d3bc0784823440";

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, personId) {
    if (err) {
      return console.log(err);
    } else {
      console.log(personId);
      done(null, personId);
    }
  });
};

// Perform Classic Updates by Running Find, Edit, then Save
const personIdEdit = "6308fb0220d3bc0784823440";

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  // .findById() method to find a person by _id with the parameter personId as search key.
  Person.findById(personId, (err, person) => {
    if (err) return console.log(err);

    person.favoriteFoods.push(foodToAdd);

    person.save(function (err, updatedPerson) {
      if (err) return console.error(err);
      done(null, updatedPerson);
    });
  });
  //done(null /*, data*/);
};

// Perform New Updates on a Document Using model.findOneAndUpdate()
const personNameEdit = "Daniel";

const findAndUpdate = (personNameEdit, done) => {
  const ageToSet = 20;
  const opts = { new: true };

  Person.findOneAndUpdate(
    { name: personNameEdit },
    { age: ageToSet },
    opts,
    (err, updatedDoc) => {
      if (err) return console.log(err);
      done(null, updatedDoc);
    }
  );
};

//Delete One Document Using model.findByIdAndRemove
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function (err, personDeleted) {
    if (err) {
      console.log(err);
    } else {
      console.log("Removed User : ", personDeleted);
      done(null, personDeleted);
    }
  });
};

// Delete Many Documents with model.remove()
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  User.remove({ name: nameToRemove }, function (err, removeResult) {
    if (err) {
      console.log(err);
    } else {
      console.log("Result :", removeResult);
      done(null, removeResult);
    }
  });
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
