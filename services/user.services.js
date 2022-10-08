import UserModels from "../models/user.models.js";

export default () => ({
  getCurrentUser: async () => {
    try {
      // @TODO: implement jwt
      return await UserModels.findOne({ email: "tai.vo@dev.com" });
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (user) => {
    try {
      return await new UserModels(user).save();
    } catch (err) {
      console.log(err);
    }
  },
});
