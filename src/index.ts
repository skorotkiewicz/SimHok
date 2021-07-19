/**
 * Returns the length of a String object.
 * Gets the length of the array.
 * This is a number one higher than the highest index in the array.
 * @param {string | unknown[]} data
 * @returns {number}
 */
export const len = (data: string | unknown[]): number => {
  return data.length;
};

/**
 * Capitalize only the _first word_ in the String.
 * @param {string} data String
 * @returns {string} Capitalized String
 */
export const capitalize = (data: string): string => {
  return upper(data.charAt(0)) + data.slice(1);
};

/**
 * Capitalize _each word_ in the specified String.
 * @param {string} data String
 * @returns {string} Capitalized String
 */
export const capitalizeAll = (data: string): string => {
  return data
    .split(" ")
    .map((word: string) => `${upper(word[0])}${word.slice(1)}`)
    .join(" ");
};

/**
 * Converts all the alphabetic characters in a String to uppercase.
 * @param {string} data String
 * @returns {string} Uppercase String
 */
export const upper = (data: string): string => {
  return data.toUpperCase();
};

/**
 * Converts all the alphabetic characters in a String to lowercase.
 * @param {string} data String
 * @returns {string} Lowercase String
 */
export const lower = (data: string): string => {
  return data.toLowerCase();
};

/**
 * Checks if the String starts with the given pattern.
 * @param {string} data String
 * @param {string} start Start pattern.
 * @returns {boolean} Returns true if found.
 */
export const startsWith = (data: string, start: string): boolean => {
  return split(data, [0, len(start)]) === start;
};

/**
 * Checks if the String ends with the given pattern.
 * @param {string} data String
 * @param {string} start Pattern
 * @returns {boolean} Returns true if found.
 */
export const endsWith = (data: string, end: string): boolean => {
  return split(data, [0, flip(len(end))]) === end;
};

export const split = (data: string, range: any): string | number => {
  if (len(range) === 2) {
    if (range[1] < 0) {
      return data.slice(data.length - flip(range[1]));
    } else {
      return data.slice(range[0], range[1] !== 0 ? range[1] : Infinity);
    }
  } else {
    return data[range];
  }
};

/**
 * Removes the specified characters at the end of the String.
 * @param {string} data String
 * @param {string} remove Characters to remove.
 * @returns {string}
 */
export const rstrip = (data: string, remove: string): string => {
  return endsWith(data, remove) ? data.slice(0, flip(len(remove))) : data;
};

/**
 * Removes the specified characters at the beginning of the String.
 * @param {string} data String
 * @param {string} remove Characters to remove.
 * @returns {string}
 */
export const lstrip = (data: string, remove: string): string => {
  return startsWith(data, remove) ? data.substring(len(remove)) : data;
};

/**
 * Converts negative numbers to positive and positive numbers to negative.
 * @param {number} data
 * @returns {number}
 */
export const flip = (data: number): number => {
  return data < 0 ? Math.abs(data) : -Math.abs(data);
};

/**
 * The zfill() method adds zeros (0) at the beginning of the String.
 * @param {string} data String
 * @param {string | number} many How many zeros to add.
 * @returns {string | number}
 */
export const zfill = (data: string | number, many: number): string | number => {
  let fill = "";
  for (let i = 0; i < many; i++) {
    fill += 0;
  }
  return fill + data;
};

/**
 * Count the number of element persent inside the array
 * This works only for permitive values like, Number, String, Boolean
 * @param {any} arr Array
 * @param {any} toCount Any element
 * @returns {number} Count the number of elements persent.
 */
export const count = (arr: any, toCount: any): number => {
  let count = arr.filter((s: any) => s === toCount);
  return len(count);
};

/**
 * Prints to `stdout` with newline.
 * @param {any} data
 */
export const log = <T>(data: T): void => {
  console.log(data);
};

/**
 * Compares two Strings with case ignore.
 * @param {string} str1 String
 * @param {string} str2 String
 * @returns {boolean}
 */
export const compareIgnoreCase = (str1: string, str2: string): boolean => {
  return lower(str1) === lower(str2);
};

/**
 * A handy and easy-to-read way to write long numbers.
 * String `1_000_000` change into regular number.
 * @param {string} number
 * @returns {number}
 */

export const n = (number: string): number => {
  return Number(number.replace(/_/gm, ""));
};

/**
 * Remove all whitespaces, new lines and set correct punctuation
 * @param {string} data
 * @param {boolean} multiline default false
 * @returns
 */
export const clean = (data: string, multiline = false): string => {
  // In English, it is always an error. There should be no space between a sentence and its ending punctuation, whether that's a period, a question mark, or an exclamation mark. There should also be no space before a colon, semicolon, or comma.

  data = !multiline ? data.replace(/\s+/g, " ") : data;

  return data
    .replace(/[ ]+/g, " ")
    .replace(/\s+\./g, ".")
    .replace(/\s+\,/g, ",")
    .replace(/\s+\?/g, "?")
    .replace(/\s+\:/g, ":")
    .replace(/\s+\;/g, ";")
    .replace(/\s+\!/g, "!");
};
