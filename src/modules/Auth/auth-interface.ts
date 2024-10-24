/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./auth-constant";

export type TLoginUser = {
  email: string;
  password: string;
};
export type TRegisterUser = {
  _id?: string;
  name: string;
  role: keyof typeof USER_ROLE;
  email: string;
  password: string;
  address: string;
};
export interface TUserModel extends Model<TRegisterUser> {
  isUserExistsByEmail(id: string): Promise<TRegisterUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
export type TuserRole = keyof typeof USER_ROLE;
