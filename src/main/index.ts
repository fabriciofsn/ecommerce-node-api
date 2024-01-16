import dotenv from 'dotenv';
import { createHTTPServer } from './presentation/http/server';
import { prisma } from '@main/infra/database/orm/prisma/client';
import { logger } from '@shared/helpers/logger.winston';
import { Application } from 'express';
import { createExpressApplication } from './presentation/http/app.express';
import { createSPAExpressApplication } from './presentation/http/spa.express';


async function bootstrap() {

//Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const api_name = process.env.API_NAME;
const host_name = process.env.HOST_NAME;
const port = process.env.PORT;

logger.info(`Inicializando a API....🚀`);

const app: Application = await createExpressApplication();
logger.ok(`Aplicação Express Instanciada e Configurada`);

const httpServer = await createHTTPServer(app);
logger.ok('Servidor HTTP Instanciado e Configurado');

httpServer.listen({ port: port }, async () => {
logger.ok(`Servidor HTTP Pronto e Ouvindo em http://${host_name}:${port}`);
});

const spa: Application = await createSPAExpressApplication();
  logger.ok(`SPA - Aplicação Express Instanciada e Configurada`);
  const httpServerSPA = await createHTTPServer(spa);
  logger.ok('SPA - Servidor HTTP para  Instanciado e Configurado');
  httpServerSPA.listen({ port: 5400 }, async () => {
    logger.ok(`SPA - Servidor HTTP Pronto e Ouvindo em http://${host_name}:5400`);
  });

prisma.$connect().then(
async () => {
logger.ok(`Banco de Dados Conectado`);
}
);

}

bootstrap()
.catch((error) => {
logger.error(error.message);
});