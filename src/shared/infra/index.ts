import "reflect-metadata";

import "@shared/containers";

export { handler as signInHandler } from "./aws-lambda/signIn";

export async function helloWorld(event: any) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }, null, 4),
  };
}
