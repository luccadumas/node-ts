"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var email = _a.email, name = _a.name, password = _a.password;
    var user = {
        email: email, name: name, password: password
    };
    return user;
}
exports.default = createUser;
