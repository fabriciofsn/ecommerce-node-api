import { Prisma, TipoUsuarioPrisma } from "@prisma/client";
import { Usuario } from "@modules/usuario/domain/usuario.entity";
import { IUsuario, RecuperarUsuarioProps, TipoUsuario } from "@modules/usuario/domain/usuario.types";

class UsuarioMap {

    public static toDTO(usuario: Usuario): IUsuario {
        return {
          id: usuario.id,
          nome: usuario.nome,
          email:  usuario.email,
          senha: usuario.senha,
          tipo: usuario.tipo,
          dataCriacao: usuario.dataCriacao,
          dataAtualizacao: usuario.dataAtualizacao
        }
    }

    public static toDomain(usuario: RecuperarUsuarioProps): Usuario {
        return Usuario.recuperar(usuario);
    }

    public static fromPrismaModelToDomain(UsuarioPrisma: Prisma.UsuarioCreateInput): Usuario {
        return UsuarioMap.toDomain({
          id: UsuarioPrisma.id,
          nome: UsuarioPrisma.nome,
          email: UsuarioPrisma.email,
          senha: UsuarioPrisma.senha,
          tipo: TipoUsuario[UsuarioPrisma.tipo],
          dataCriacao: UsuarioPrisma.dataCriacao as Date,
          dataAtualizacao: UsuarioPrisma.dataAtualizacao as Date
        });
    }

    public static toTipoUsuarioPrisma(tipo: TipoUsuario): TipoUsuarioPrisma {
        return TipoUsuarioPrisma[tipo.toString() as keyof typeof TipoUsuarioPrisma];
    }

}

export { UsuarioMap };