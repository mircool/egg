const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        // this.ctx.body = 'hello egg'
        await this.ctx.render('index.html',{message:'egg'})


    }
}

module.exports = HomeController;