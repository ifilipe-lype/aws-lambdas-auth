import { container } from "tsyringe";

import {
  ISignInParams,
  SignInUseCase,
} from "auth/usecases/SignInUseCase";

export async function handler(event: ISignInParams) {
  const { email, password } = event;
  const signInUseCase = container.resolve(SignInUseCase);

  try {
    const authData = await signInUseCase.execute({ email, password });

    return {
      statusCode: 200,
      body: JSON.stringify(authData, null, 2),
    };
  } catch (e: any) {
    return {
      statusCode: e.statusCode ?? 401,
      body: JSON.stringify(
        {
          error: true,
          message: e.message,
        },
        null,
        2
      ),
    };
  }
}

export default handler;
