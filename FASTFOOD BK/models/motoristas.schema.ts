import { Schema, model } from 'mongoose';
import { IMotorista } from './motoristas.model';

const motoristaSchema: Schema = new Schema({
    nombres: String,
    apellidos: String,
    email: String,
    password: String,
    fechaNacimiento: String,
    genero: String,
    ciudad: String,
    telefono: String,
    modeloMoto: String,
    placa: String,
    aprobado: String,
});

export const Motorista = model<IMotorista>('motoristas', motoristaSchema);
