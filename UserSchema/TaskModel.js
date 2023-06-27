import UserSchema from "./UserSchema.js";

export const inserUser = (userObj) => {
  return UserSchema(user.obj).save();
};
