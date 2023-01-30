import { IAuthProvider } from "@shared/providers/authProvider/IAuthProvider";

export class FakeAuthProvider implements IAuthProvider {
  async signIn(params: any): Promise<any> {}
}

export default FakeAuthProvider;
