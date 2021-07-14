/**
 * Returns the length of a String object.
 * Gets the length of the array.
 * This is a number one higher than the highest index in the array.
 *
 * @param data
 */
export const len = (data: string | unknown[]): number => {
  return data.length;
};

/**
 * Capitalize only the _first word_ in the String.
 * @param data String
 * @return Capitalized String
 */
export const capitalize = (data: string): string => {
  return upper(data.charAt(0)) + data.slice(1);
};

/**
 * Capitalize _each word_ in the specified String.
 * @param data String
 * @return Capitalized String
 */
export const capitalizeAll = (data: string): string => {
  return data
    .split(" ")
    .map((word: string) => `${upper(word[0])}${word.slice(1)}`)
    .join(" ");
};

/**
 * Converts all the alphabetic characters in a String to uppercase.
 * @param data String
 * @return Uppercase String
 */
export const upper = (data: string): string => {
  return data.toUpperCase();
};

/**
 * Converts all the alphabetic characters in a String to lowercase.
 * @param data String
 * @return Lowercase String
 */
export const lower = (data: string): string => {
  return data.toLowerCase();
};

/**
 * Checks if the String starts with the given pattern.
 * @param data String
 * @param start Start pattern.
 * @return Returns true if found.
 */
export const startsWith = (data: string, start: string): boolean => {
  return split(data, [0, len(start)]) === start;
};

/**
 * Checks if the String ends with the given pattern.
 * @param data String
 * @param start Pattern
 * @return Returns true if found.
 */
export const endsWith = (data: string, end: string): boolean => {
  return split(data, [0, abs(len(end))]) === end;
};

export const split = (data: string, range: any): string | number => {
  if (len(range) === 2) {
    if (range[1] < 0) {
      return data.slice(data.length - abs(range[1]));
    } else {
      return data.slice(range[0], range[1] !== 0 ? range[1] : Infinity);
    }
  } else {
    return data[range];
  }
};

/**
 * Removes the specified characters at the end of the String.
 * @param data String
 * @param remove Characters to remove.
 * @returns
 */
export const rstrip = (data: string, remove: string): string => {
  return endsWith(data, remove) ? data.slice(0, abs(len(remove))) : data;
};

/**
 * Removes the specified characters at the beginning of the String.
 * @param data String
 * @param remove Characters to remove.
 * @returns
 */
export const lstrip = (data: string, remove: string): string => {
  return startsWith(data, remove) ? data.substring(len(remove)) : data;
};

/**
 * Converts negative numbers to positive and positive numbers to negative.
 */
export const abs = (data: number): number | number => {
  return data < 0 ? Math.abs(data) : -Math.abs(data);
};

/**
 * The zfill() method adds zeros (0) at the beginning of the String.
 * @param data String
 * @param many How many zeros to add.
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
 * @param arr Array
 * @param toCount Any element
 * @return Count the number of elements persent.
 */
export const count = (arr: any, toCount: any): number => {
  let count = arr.filter((s: any) => s === toCount);
  return len(count);
};

/**
 * Prints to `stdout` with newline.
 * @param data
 */
export const log = <T>(data: T): void => {
  console.log(data);
};

/**
 * Compares two Strings with case ignore.
 * @param str1 String
 * @param str2 String
 */
export const compareIgnoreCase = (str1: string, str2: string): boolean => {
  return lower(str1) === lower(str2);
};
