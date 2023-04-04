import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(body: any): object;
    postUsuarios(body: any): object;
    getUsuarios(): object;
}
