import FakeAuthProvider from "@tests/fixtures/providers/FakeAuthProvider";

import { SignInUseCase } from "./SignInUseCase";

describe("SignInUseCase", () => {
  it("Should be able to instantiate class", () => {
    const signInUseCase = new SignInUseCase(new FakeAuthProvider());

    expect(signInUseCase).toBeDefined()
    expect(signInUseCase.execute).toBeInstanceOf(Function)
  });
});
