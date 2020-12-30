import { get, post } from "../ServiceBase/index";
import { HttpStatus } from "../../Interfaces/Resources/Api/ApiResponse";
import { MovieModel } from "../../Interfaces/Models/Movier/Movie";

const prefix = "movies";

export async function GetMovies(): Promise<MovieModel[]> {
    const result = await get<MovieModel[]>(prefix);
    return result.status === HttpStatus.OK ? result.data : [];

}
export async function GetMovieById(id: string): Promise<MovieModel | null> {
    const result = await get<MovieModel>(prefix + `/${id}`);
    return result.status === HttpStatus.OK ? result.data : null;

}
