import { inject, injectable } from "tsyringe";
import { IAuthProvider } from "@shared/providers/authProvider/IAuthProvider";

export interface ISignInParams {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  userId: string;
}

@injectable()
export class SignInUseCase {
  constructor(
    @inject("AuthProvider") private readonly authProvider: IAuthProvider
  ) {}

  async execute({
    email,
    password,
  }: ISignInParams): Promise<IAuthResponse | never> {
    // TODO: validates user's credentials

    const token = "";
    const userId = "";

    return {
      token,
      userId,
    };
  }
}
