import {get, post} from '../ServiceBase/index';
import {HttpStatus} from '../../Interfaces/Resources/Api/ApiResponse';
import {  UserLoginResponse, UserLoginRequest } from '../../Interfaces/Models/User/User';


const prefix = "session/";

export async function Login( resquest: UserLoginRequest ): Promise<UserLoginResponse | null> {
    const result = await post<UserLoginRequest, UserLoginResponse>(prefix, resquest);
    return result.status === HttpStatus.OK ? result.data : null;
}