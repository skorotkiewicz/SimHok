class SimHok {
  constructor() {}

  len(data: string | any[]): number {
    return data.length;
  }

  capitalize(data: string): string {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  upper(data: string): string {
    return data.toUpperCase();
  }

  lower(data: string): string {
    return data.toLowerCase();
  }

  startswith(data: string, start: string | number): boolean {
    return data.charAt(0) === start;
  }

  endswith(data: string, end: string | number): boolean {
    return data.charAt(data.length - 1) === end;
  }

  split(data: string, range: any): string | number {
    if (this.len(range) === 2) {
      if (range[1] < 0) {
        return data.slice(data.length - Math.abs(range[1]));
      } else {
        return data.slice(range[0], range[1] !== 0 ? range[1] : Infinity);
      }
    } else {
      return data[range];
    }
  }

  zfill(data: string | number, many: number): string | number {
    let fill = "";
    for (let i = 0; i < many; i++) {
      fill += 0;
    }
    return fill + data;
  }

  log(data: any): any {
    return console.log(data);
  }

  compareIgnoreCase(str1: String, str2: String) {
    return str1.toLowerCase() === str2.toLowerCase();
  }
}

module.exports = SimHok;
