"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(req, res) {
    return res.json(CreateUser_1.default({
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
