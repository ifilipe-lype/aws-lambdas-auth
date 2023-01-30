import { container } from "tsyringe";
import { CognitoAuthProvider } from "@shared/providers/authProvider/CognitoAuthProvider";
import { IAuthProvider } from "@shared/providers/authProvider/IAuthProvider";

container.registerSingleton<IAuthProvider>("AuthProvider", CognitoAuthProvider);
