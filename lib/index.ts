

// Save your local vars in .env for testing. DO NOT VERSION CONTROL `.env`!.
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') require('dotenv').config();

import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as views from 'koa-views';
import * as chalk from 'chalk';

import router from './routes';

const app = new Koa();
const port = process.env.PORT || 5555;

app.use(bodyParser())
   .use(views(__dirname + '/views', {
     map: {
       html: 'handlebars'
     }
   }))
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(port, () => console.log(chalk.black.bgGreen.bold(`Listening on port ${port}`)));

export default app;
