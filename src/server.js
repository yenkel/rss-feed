// // in server.js
// const express = require('express');
// const app = express();
//
// // Since the root/src dir contains our index.html
// app.use(express.static(__dirname + '/src/'));
//
// // Heroku bydefault set an ENV variable called PORT=443
// //  so that you can access your site with https default port.
// // Falback port will be 8080; basically for pre-production test in localhost
// // You will use $ npm run prod for this
// app.listen(8081);

const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, '/../index.html')
    const publicPath = express.static(path.join(__dirname, '../public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
