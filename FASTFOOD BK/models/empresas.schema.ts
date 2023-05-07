import { Schema, model } from 'mongoose';
import { IEmpresa } from './empresas.model';

const empresaSchema: Schema = new Schema({
    nombre: String,
    categoria: String,
    logo: String,
    ubicacion: [String],
});

export const Empresa = model<IEmpresa>('empresas', empresaSchema)
