import { Document } from 'mongoose';

export interface ICliente extends Document {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    fechaNacimiento: string;
    genero: string;
    ciudad: string;
    telefono: string;
    tarjetas: string[];
    orden: string[];
}

import { Schema, model } from 'mongoose';

const clienteSchema: Schema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    fechaNacimiento: String,
    genero: String,
    ciudad: String,
    telefono: String,
    tarjetas: [String],
    orden: [String]
});

export const Cliente = model<ICliente>('clientes', clienteSchema);
