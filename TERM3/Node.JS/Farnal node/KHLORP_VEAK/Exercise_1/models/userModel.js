const {getData} = require('../utils/functions.js');
let todos = getData('./database/users.json');

function getTodo() {
    return {
        isSuccess: true,
        message: 'User data fetched successfully',
        data: todos
    }
}

module.exports = {getTodo};