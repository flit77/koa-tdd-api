const Koa = require('koa');
const articlesRoutes = require('./routes/articles.routes');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const PORT = process.env.PORT || 8081;

app.use(bodyParser());
app.use(articlesRoutes.routes());

const server = app.listen(PORT).on('error', err => {
  console.error(err);
});

module.exports = server;
