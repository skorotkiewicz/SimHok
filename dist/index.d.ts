declare class SimHok {
    constructor();
    len(data: string | any[]): number;
    capitalize(data: string): string;
    upper(data: string): string;
    lower(data: string): string;
    startswith(data: string, start: string | number): boolean;
    endswith(data: string, end: string | number): boolean;
    split(data: string, range: any): string | number;
    zfill(data: string | number, many: number): string | number;
    log(data: any): any;
}
