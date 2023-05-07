import { Schema, model } from 'mongoose';
import { ICliente } from './clientes.model';

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