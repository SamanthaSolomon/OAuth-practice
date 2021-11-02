import { Student } from '../models/student.js'

export {
  index,
  addFact,
  delFact,
}

function index(req, res) {
  // Make the query object to use with Student.find based on
  // whether the user has submitted the search form or not
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  // Sorting by name
  Student.find(modelQuery)
    .sort("name")
    .exec(function (err, students) {
      if (err) return next(err)
      // Passing students and name, for use in the EJS
      res.render("students/index", { 
        students: students, 
        name: req.query.name,
      })
    })
}

function addFact(req, res) {}

function delFact(req, res) {}
