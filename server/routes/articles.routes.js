const Router = require('koa-router');
const router = new Router();
const articlesController = require('../controllers/articlesController');
const BASE_URL = `/api/v1/articles`;

router.get(`${BASE_URL}`, articlesController.index);
router.get(`${BASE_URL}/:id`, articlesController.show);

module.exports = router;
