export const len = (data: string | unknown[]): number => {
  return data.length;
};

export const capitalize = (data: string): string => {
  return upper(data.charAt(0)) + data.slice(1);
};

export const capitalizeAll = (data: string): string => {
  return data
    .split(" ")
    .map((word: string) => `${upper(word[0])}${word.slice(1)}`)
    .join(" ");
};

export const upper = (data: string): string => {
  return data.toUpperCase();
};

export const lower = (data: string): string => {
  return data.toLowerCase();
};

export const startsWith = (data: string, start: string): boolean => {
  return split(data, [0, len(start)]) === start;
};

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

export const rstrip = (data: string, remove: string): string => {
  return endsWith(data, remove) ? data.slice(0, abs(len(remove))) : data;
};

export const lstrip = (data: string, remove: string): string => {
  return startsWith(data, remove) ? data.substring(len(remove)) : data;
};

export const abs = (data: number): number | number => {
  return data < 0 ? Math.abs(data) : -Math.abs(data);
};

export const zfill = (data: string | number, many: number): string | number => {
  let fill = "";
  for (let i = 0; i < many; i++) {
    fill += 0;
  }
  return fill + data;
};

export const log = <T>(data: T): void => {
  console.log(data);
};

export const compareIgnoreCase = (str1: string, str2: string): boolean => {
  return lower(str1) === lower(str2);
};
