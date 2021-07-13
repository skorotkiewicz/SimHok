export const len = (data: string | any[]): number => {
  return data.length;
};

export const capitalize = (data: string): string => {
  return data.charAt(0).toUpperCase() + data.slice(1);
};

export const upper = (data: string): string => {
  return data.toUpperCase();
};

export const lower = (data: string): string => {
  return data.toLowerCase();
};

export const startswith = (data: string, start: string): boolean => {
  return data.charAt(0) === start;
};

export const endswith = (data: string, end: string): boolean => {
  return data.charAt(data.length - 1) === end;
};

export const split = (data: string, range: any): string | number => {
  if (len(range) === 2) {
    if (range[1] < 0) {
      return data.slice(data.length - Math.abs(range[1]));
    } else {
      return data.slice(range[0], range[1] !== 0 ? range[1] : Infinity);
    }
  } else {
    return data[range];
  }
};

export const zfill = (data: string | number, many: number): string | number => {
  let fill = "";
  for (let i = 0; i < many; i++) {
    fill += 0;
  }
  return fill + data;
};

export const log = (data: any): any => {
  return console.log(data);
};

export const compareIgnoreCase = (str1: String, str2: String): boolean => {
  return str1.toLowerCase() === str2.toLowerCase();
};
