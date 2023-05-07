import { Document, Schema, Types } from 'mongoose';
import { model } from 'mongoose';

export interface IEmpresa extends Document {
    nombre: string;
    categoria: string;
    logo: string;
    ubicacion: string[];
}

const empresaSchema: Schema = new Schema({
    nombre: String,
    categoria: String,
    logo: String,
    ubicacion: [String],
});

export const Empresa = model<IEmpresa>('empresas', empresaSchema);