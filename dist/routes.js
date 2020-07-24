"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = require("./services/CreateUser");
function helloWorld(req, res) {
    return res.json(CreateUser_1.createUser({
        name: 'João Felipe',
        email: 'thecurrentuser@live.com',
        password: '123456',
        techs: [
            'Java',
            'Spring',
            'Javascript',
            'Node.Js',
            { tech: 'Java', experience: 60 }
        ]
    }));
}
exports.helloWorld = helloWorld;
