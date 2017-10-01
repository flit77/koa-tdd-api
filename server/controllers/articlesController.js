const env = process.env.NODE_ENV || 'test';
const config = require('../../knexfile')[env];
const knex = require('knex')(config);

const index = async ctx => {
  try {
    const articles = await knex('articles').select();
    ctx.body = {
      data: articles
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = { index };
