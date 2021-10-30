const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles');

app.use(express.static(path.join(__dirname , 'public')))
app.use('/css', express.static(path.join(__dirname , 'node_modules/bootstrap/dist/css')))
app.use('/js' , express.static(path.join(__dirname , 'node_modules/bootstrap/dist/js')))
app.use('/js' , express.static(path.join(__dirname , 'node_modules/jquery/dist')))
app.set('view engine' , 'ejs')

app.use('/' , indexRouter)
app.use('/articles' , articlesRouter)

app.listen(3000, () => {console.log('Server listen on port 3000')})