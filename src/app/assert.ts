// assert.ts

/**
 * Asserts that a value is defined and not null.
 * @param value - The value to check.
 * @param message - The error message to throw if the value is null or undefined.
 */
export function assertIsDefined<T>(value: T, message: string = 'Value should be defined.'): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
      throw new Error(message);
    }
  }
  