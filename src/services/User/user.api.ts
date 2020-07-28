import { post, put } from "../ServiceBase/index";
import { HttpStatus } from "../../Interfaces/Resources/Api/ApiResponse";
import { UserModel } from "../../Interfaces/Models/User/User";

const prefix = "users";

export async function CreateUser(user: UserModel): Promise<UserModel | null> {
    const result = await post<any, UserModel>(prefix, user);
     return result.status === HttpStatus.CREATED ? result.data : null;
   
}
