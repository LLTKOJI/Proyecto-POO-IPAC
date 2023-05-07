"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bd = 'FASTFOOD';
const port = '27017';
const host = 'localhost';
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default
            .connect(`mongodb://${host}:${port}/${bd}`)
            .then(result => console.log('Se conecto a mongodb'))
            .catch(error => console.log(error));
    }
}
exports.Database = Database;
