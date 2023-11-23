import { describe, expect, test } from "vitest";
import Name from "./index";

describe("exercise4 - problem2", () => {
  test.each([
    {
      firstName: "john",
      lastName: "SMITH",
      expected: {
        firstName: "John",
        lastName: "Smith",
        fullName: "John Smith",
        initials: "J.S",
      },
    },
    {
      firstName: "sARah",
      lastName: "SMITH",
      expected: {
        firstName: "Sarah",
        lastName: "Smith",
        fullName: "Sarah Smith",
        initials: "S.S",
      },
    },
  ])(".Name", ({ firstName, lastName, expected }) => {
    const person = new Name(firstName, lastName);
    expect(person.getFirstName).toBe(expected.firstName);
    expect(person.getLastName).toBe(expected.lastName);
    expect(person.getFullName).toBe(expected.fullName);
    expect(person.getInitials).toBe(expected.initials);
  });
});
