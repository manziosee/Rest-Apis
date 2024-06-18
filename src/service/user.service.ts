import {DocumentDefinition} from "mongoose"
import UserModel, { UserDocument } from "../models/user.model"

export async function createUser(input: DocumentDefinition<Omit<UserDocument, 'createAt' | 'updateAt' | 'comparePassword'>>) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}