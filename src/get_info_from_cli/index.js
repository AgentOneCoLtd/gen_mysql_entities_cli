"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const usageStr = 'Usage: $ gen-mysql-entities -o <outputDir> -h <host> -p <port> -u <user> -x <password> -d <database>';
const option = {
    o: {
        alias: 'outputDir',
        describe: 'Output directory',
        default: './entities',
    },
    h: {
        alias: 'host',
        describe: 'IP adress / Hostname',
        default: '127.0.0.1',
    },
    p: {
        alias: 'port',
        describe: 'Port number',
        default: '3306',
    },
    u: {
        alias: 'user',
        describe: 'Username',
        default: 'root',
    },
    x: {
        alias: 'password',
        describe: 'Password',
        default: '',
    },
    d: {
        alias: 'database',
        describe: 'Database',
        demand: true,
    },
};
function getInfoFromCli() {
    return yargs_1.default.usage(usageStr).option(option).argv;
}
exports.getInfoFromCli = getInfoFromCli;
