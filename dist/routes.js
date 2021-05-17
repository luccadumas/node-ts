"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function routes(req, res) {
    var user = CreateUser_1.default({
        name: 'Lucca',
        email: 'lucca@test.com',
        password: '123456',
        techs: ['React Native', 'ReactJS', 'Node.js', { title: 'Django Rest Framework', experience: 10 }]
    });
    // return res.json({ message: 'Teste Teste' });
    return res.json(user);
}
exports.default = routes;
