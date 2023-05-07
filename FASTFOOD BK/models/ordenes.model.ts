import { Document, Types } from 'mongoose';
import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

export interface IOrden extends Document {
    motorista: Types.ObjectId;
    producto: Types.ObjectId;
    cantidad: string;
    estado: string;
    ubicacion: string;
}

const ordenSchema: Schema = new Schema({
    motorista: mongoose.Types.ObjectId,
    producto: mongoose.Types.ObjectId,
    cantidad: String,
    estado: String,
    ubicacion: String,
});

export const Orden = model<IOrden>('ordenes', ordenSchema);