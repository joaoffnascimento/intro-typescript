"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnAnotherCallBackExample = exports.overKillConsoleLog = void 0;
/** Enums - Nomear conjunto de valores */
var Techs;
(function (Techs) {
    Techs[Techs["React"] = 0] = "React";
    Techs[Techs["Angular"] = 1] = "Angular";
    Techs[Techs["Vue"] = 2] = "Vue";
})(Techs || (Techs = {}));
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, techs = _a.techs;
    return {
        name: name,
        email: email,
        password: password,
        techs: techs
    };
}
exports.default = createUser;
function overKillConsoleLog(arg1, arg2) {
    console.log(arg1, arg2);
}
exports.overKillConsoleLog = overKillConsoleLog;
function returnAnotherCallBackExample(callback) {
    return callback(9);
}
exports.returnAnotherCallBackExample = returnAnotherCallBackExample;
var Balance = /** @class */ (function () {
    function Balance() {
        this.balance = 0;
    }
    Balance.prototype.increment = function (income) {
        this.balance += income;
    };
    Balance.prototype.decrement = function (outcome) {
        this.balance -= outcome;
    };
    return Balance;
}());
var picture = {
    title: 'Profile',
    description: "Picture taken for my driver's license",
};
var figure = {
    title: 'Profile',
    description: "Picture taken for my driver's license",
};
