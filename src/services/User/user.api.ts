import {get} from '../ServiceBase/index';
import {HttpStatus} from '../../Interfaces/Resources/Api/ApiResponse';
import { UserModel } from '../../Interfaces/Models/User/User';


const prefix = "users";

export async function GetUsers(
  ): Promise<UserModel[] | null> {
    const result = await get<UserModel[]>(prefix);
    return result.status === HttpStatus.OK ? result.data : null;
  }