import UserServices from "../services/user.services.js";

export default () => ({
  getCurrentUser: async (req, res) => {
    try {
      const user = await UserServices().getCurrentUser();
      res.json({
        user: {
          userName: user.userName,
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          isActive: user.isActive,
        },
        token: "userToken",
      });
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (req, res) => {
    try {
      const user = await UserServices().createUser(req.body);
      res.json({ user, message: "success" });
    } catch (err) {
      console.log(err);
    }
  },
});
