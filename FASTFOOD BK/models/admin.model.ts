import mongoose from "mongoose";

export interface IAdmin {
    nombreUsuario: string;
    contrasenia: string;
}

const adminSchema = new mongoose.Schema<IAdmin>({
    nombreUsuario: String,
    contrasenia: String,
});

export const Admin = mongoose.model('administracion', adminSchema);
