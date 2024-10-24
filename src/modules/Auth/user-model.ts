/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-useless-escape */
import bcryptjs from "bcryptjs";
import { Schema, model } from "mongoose";

import config from "../../app/config";
import { USER_ROLE } from "./auth-constant";
import { TRegisterUser, TUserModel } from "./auth-interface";

const userSchema = new Schema<TRegisterUser>(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.keys(USER_ROLE),
      default: USER_ROLE.ADMIN,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcryptjs.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await UserModel.findOne({ email }).select("+password");
};
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcryptjs.compare(plainTextPassword, hashedPassword);
};

export const UserModel = model<TRegisterUser, TUserModel>("User", userSchema);
