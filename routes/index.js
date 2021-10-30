const express = require('express')
const router = express.Router()

router.get('/articles' , (req , res) => {

    const articles = [{
        title : 'BlogPost 1',
        createdAt : new Date(),
        description : 'This is very fun to have node app running.'
    },
    {
        title:'BlogPost 2',
        createdAt: new Date(),
        description: 'Javascript is very better language.'
    }
]

    res.render('index' , { articles : articles })
})

module.exports = router