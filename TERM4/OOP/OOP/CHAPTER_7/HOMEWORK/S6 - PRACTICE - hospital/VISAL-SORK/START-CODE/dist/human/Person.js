"use strict";
exports.__esModule = true;
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender = exports.Gender || (exports.Gender = {}));
/**
 * Any person in the hospital - common attributes
 */
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    return Person;
}());
exports.Person = Person;
