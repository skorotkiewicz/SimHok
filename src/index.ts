class SimHok {
  len(data: string | unknown[]): number {
    return data.length;
  }

  capitalize(data: string): string {
    return this.upper(data.charAt(0)) + data.slice(1);
  }

  capitalizeAll(data: string): string {
    return data
      .split(" ")
      .map((word: string) => `${this.upper(word[0])}${word.slice(1)}`)
      .join(" ");
  }

  upper(data: string): string {
    return data.toUpperCase();
  }

  lower(data: string): string {
    return data.toLowerCase();
  }

  startswith(data: string, start: string): boolean {
    return this.split(data, [0, this.len(start)]) === start;
  }

  endswith(data: string, end: string): boolean {
    return this.split(data, [0, this.abs(this.len(end))]) === end;
  }

  split(data: string, range: any): string | number {
    if (this.len(range) === 2) {
      if (range[1] < 0) {
        return data.slice(data.length - this.abs(range[1]));
      } else {
        return data.slice(range[0], range[1] !== 0 ? range[1] : Infinity);
      }
    } else {
      return data[range];
    }
  }

  rstrip(data: string, remove: string): string {
    return this.endswith(data, remove)
      ? data.slice(0, this.abs(this.len(remove)))
      : data;
  }

  lstrip(data: string, remove: string): string {
    return this.startswith(data, remove)
      ? data.substring(this.len(remove))
      : data;
  }

  abs(data: number): number | number {
    return data < 0 ? Math.abs(data) : -Math.abs(data);
  }

  zfill(data: string | number, many: number): string | number {
    let fill = "";
    for (let i = 0; i < many; i++) {
      fill += 0;
    }
    return fill + data;
  }

  log<T>(data: T): void {
    console.log(data);
  }

  compareIgnoreCase(str1: string, str2: string): boolean {
    return this.lower(str1) === this.lower(str2);
  }
}

export default SimHok;
module.exports = SimHok;
