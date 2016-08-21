

import * as Router from 'koa-router';
import {Request} from 'koa';
import * as chalk from 'chalk';

const router = new Router();

router.get('/', async (ctx: IKoaRequestWithBody, next: any) => {
  await ctx.render('index', {
    llama: 'duck'
  });
});

router.get('/llama', async (ctx, next) => {
  ctx.body = 'duck';
  ctx.status = 200;
});

export default router;

interface IKoaRequestWithBody extends Router.IRouterContext {
  request: IKoaBodyParserRequest;
  render: any;
}

interface IKoaBodyParserRequest extends Request {
  body: any;
}
