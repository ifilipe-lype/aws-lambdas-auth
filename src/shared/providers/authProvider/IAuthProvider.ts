export interface IAuthProvider {
  signIn: (params: any) => Promise<any>;
}
