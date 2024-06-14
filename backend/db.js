/**
 * Todo {
 *  title: String;
 *  description: String;
 *  completed: Boolean;
 * }
 */

const mongoose = require('mongoose');

mongoose.connect("Your mongo server");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}