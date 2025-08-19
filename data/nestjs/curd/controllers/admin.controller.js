const User = require('../models/user.model');
const validationHandler = require('../validations/validationHandler');

exports.updateUserRole = async (req, res, next) => {
    try {
        validationHandler(req);

        const { userId } = req.params;
        const { newRole } = req.body;

        const validRoles = ['admin', 'superAdmin'];
        if (!validRoles.includes(newRole)) {
            return res.status(400).json({ message: 'Invalid role specified' });
        }

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.role = newRole;
        await user.save();

        res.json({ message: 'Role updated successfully', user });
    } catch (err) {
        next(err);
    }
};
