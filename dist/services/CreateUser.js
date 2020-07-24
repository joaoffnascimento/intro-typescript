"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, techs = _a.techs;
    return {
        name: name,
        email: email,
        password: password,
        techs: techs
    };
}
exports.createUser = createUser;
