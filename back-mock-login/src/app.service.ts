import { Injectable } from '@nestjs/common';

const usuarios = [];

@Injectable()
export class AppService {
  login(): object {
    const token = {
      "accessToken": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }

    return token;
  }

  postUsuario(usuario: any): any {
    usuarios.push(usuario)
  }

  getUsuarios(): any {
    return usuarios;
  }
}
