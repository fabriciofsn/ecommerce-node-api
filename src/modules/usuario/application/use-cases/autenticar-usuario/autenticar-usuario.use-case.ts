import { Usuario } from "@modules/usuario/domain/usuario.entity";
import { IUsuarioRepository } from "@modules/usuario/domain/usuario.repository.interface";
import { CredenciaisUsuarioProps, IUsuario } from "@modules/usuario/domain/usuario.types";
import { UsuarioMap } from "@modules/usuario/infra/mappers/usuario.map";
import { IUseCase } from "@shared/application/use-case.interface";

class AutenticarUsuarioUseCase implements IUseCase<CredenciaisUsuarioProps,IUsuario> {
    private _usuarioRepositorio: IUsuarioRepository<Usuario>;

    constructor(repositorio: IUsuarioRepository<Usuario>){
        this._usuarioRepositorio = repositorio;
    }

    async execute(credenciais: CredenciaisUsuarioProps): Promise<IUsuario> {
       
        const usuario: Usuario | null = await this._usuarioRepositorio.recuperarPorEmail(credenciais.email);

        if (!usuario){
            throw new Error('Usuário Inexistente');  //futuramente uma execção de aplicação específica
        }

        const autenticado: boolean = await this._usuarioRepositorio.autenticar(credenciais);

        if (!autenticado) {
            throw new Error('Autenticação Falhou');  //futuramente uma execção de aplicação específica
        }

        return UsuarioMap.toDTO(usuario);
    }

}

export { AutenticarUsuarioUseCase }