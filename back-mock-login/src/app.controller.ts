import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/login")
  getHello(@Body() body: any): object {
    if(body.quatroLetras === "ABCD" && body.senha === "string") {
      console.log("Login Realizado com sucesso!");
      return this.appService.login();
    } else {
      console.log("Login falhou.");
      throw new BadRequestException("usuario ou senha invalidos");
    }
  }

  @Post("/usuarios")
  postUsuarios(@Body() body: any): object {
      return this.appService.postUsuario(body);
  }

  @Get("/usuarios")
  getUsuarios(): object {
      return this.appService.getUsuarios();
  }
}
