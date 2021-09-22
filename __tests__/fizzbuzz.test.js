import { greetFriend } from "../fizzbuzz";

describe("Fizz Buzz Game", () => {
  it("should greet with the provided name", () => {
    const expectedGreeting = "Hello, Abe! 👋"

    const greeting = greetFriend("Abe");

    expect(greeting).toBe(expectedGreeting);
  });
});