import { IAuthProvider } from "./IAuthProvider";

export class CognitoAuthProvider implements IAuthProvider {
  async signIn(params: any): Promise<any> {};
}
