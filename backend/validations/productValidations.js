const {body} = require("express-validator");
module.exports = [body('title').not().isEmpty().trim().escape().withMessage('title is required'),
body('price').custom((value) => {
    if(parseInt(value) < 1) {
        throw new Error('Price should be above $1');
    } else {
        return parseInt(value);
    }
}).trim().escape(),
body('category').not().isEmpty().trim().escape().withMessage('category is required'),
body('description').not().isEmpty().trim().escape().withMessage('description is required'),
]