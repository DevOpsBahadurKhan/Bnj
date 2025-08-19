const express = require('express');
const router = express.Router();

const { updateUserRoleValidator } = require('../validations/validator');

const passportJWT = require('../middleware/passport')();
const verifyAccess = require('../middleware/verifyAccess');
const controller = require('../controllers/admin.controller');


router.patch(
    '/role/:userId',
    updateUserRoleValidator,
    passportJWT.authenticate(),
    verifyAccess('update', 'user', 'any'),
    controller.updateUserRole
);


module.exports = router;
