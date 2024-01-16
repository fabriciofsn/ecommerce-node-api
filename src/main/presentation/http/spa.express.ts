import { logger } from "@shared/helpers/logger.winston";import express, { Application } from "express";
import path from "path";

const createSPAExpressApplication = async (): Promise<Application>  => {
    const spa: Application = express();
    spa.disable('x-powered-by');

    const SPAPath = path.join(__dirname, '../../../../../ecommerce-front-spa');
    logger.info(SPAPath);
    spa.use(express.static(SPAPath));

    spa.get('*', (req, res) => {
        res.sendFile(path.join(SPAPath, 'index.html'));
    });
   
    return spa;
}

export { createSPAExpressApplication }