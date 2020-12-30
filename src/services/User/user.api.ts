import { get, post, put } from "../ServiceBase/index";
import { HttpStatus } from "../../Interfaces/Resources/Api/ApiResponse";
import { BuyInfo, BuyMovie, User, UserBuy, UserModel } from "../../Interfaces/Models/User/User";

const prefix = "users";

export async function CreateUser(user: UserModel): Promise<UserModel | null> {
    const result = await post<any, UserModel>(prefix, user);
     return result.status === HttpStatus.CREATED ? result.data : null;
   
}

export async function GetUser(userId: string): Promise<User | null> {
    const result = await get<User>(`${prefix}/${userId}`);
     return result.status === HttpStatus.OK ? result.data : null;
   
}
export async function UserBuyMovie(buyMovie: BuyMovie): Promise<UserBuy | null> {
    const result = await put<any, UserBuy>("userbuy", buyMovie);
    return result.status === HttpStatus.CREATED ? result.data : null;
   
}
