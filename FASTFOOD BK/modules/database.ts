import mongoose from 'mongoose';
const bd: string = 'FASTFOOD';
const port: string = '27017';
const host: string = 'localhost';

export class Database {
    constructor() {
        this.conectar();
    }

    conectar() {
        mongoose
            .connect(`mongodb://${host}:${port}/${bd}`)
            .then(result => console.log('Se conecto a mongodb'))
            .catch(error => console.log(error));
    }
}
