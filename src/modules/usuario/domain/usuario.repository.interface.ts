import { IRepository } from "@shared/domain/repository.interface";
import { Usuario } from "./usuario.entity";
import { CredenciaisUsuarioProps } from "./usuario.types";

interface IUsuarioRepository<T> extends IRepository<T> {

    autenticar(credenciais:CredenciaisUsuarioProps): Promise<boolean>;
    recuperarPorEmail(email:string):  Promise<Usuario | null>;

}

export { IUsuarioRepository }