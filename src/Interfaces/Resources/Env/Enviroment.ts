export interface Enviroment {
  movierurl: string;
}
const enviroment = {
  movierurl: process.env.REACT_APP_API_URL,
} as Enviroment;

export default enviroment;
