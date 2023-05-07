import { Schema, model, Document } from 'mongoose';

export interface IMotorista extends Document {
    nombres: string;
    apellidos: string;
    email: string;
    password: string;
    fechaNacimiento: Date;
    genero: string;
    ciudad: string;
    telefono: string;
    modeloMoto: string;
    placa: string;
    aprobado: boolean;
}

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