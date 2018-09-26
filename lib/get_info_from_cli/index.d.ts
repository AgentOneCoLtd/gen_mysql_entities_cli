import yargs from 'yargs';
export interface IInformationArg extends yargs.Arguments {
    outputDir: string;
    host: string;
    port: string;
    user: string;
    password: string;
    database: string;
}
export declare function getInfoFromCli(): IInformationArg;
//# sourceMappingURL=index.d.ts.map