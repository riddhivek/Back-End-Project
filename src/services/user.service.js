const User = require('../model/user.model');

module.exports = class UserServices {
    async addNewUser(body) {
        try {
            return await User.create(body)
        } catch (error) {
            console.log(error);
            return res.json({ message: "Service Error while adding user"});
        }
    };

    async getUser(body) {
        try {
            return await User.findOne(body);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Service Error while getting user "});
        }
    };

    async getAllUser(body) {
        try {
            return await User.find(body);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Service Error while getting all user" });
        }
    };

    async getUserById(id) {
        try {
            return await User.findById(id)
        } catch (error) {
            console.log(error);
            return res.json({ message: "Service Error while getting user by ID" });
        }
    };

    async updateUser(id, body) {
        try {
            return await User.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.log(error);
            return res.json({ message: "Service Error while updating user" });
        }
    };
};
