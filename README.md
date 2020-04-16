# gen_mysql_entities_cli

generate most used mysql entity functions in our codebase

## install

```bash
$ npm install -g @ag1/gen_mysql_entities_cli
```

## usage

```bash
$ gen-mysql-entities -o <outputDir> -h <host> -p <port> -u <user> -x <password> -d <database>
```

# dependencies
```bash
yarn add @ag1/mysql_rx_wrapper @ag1/nil @ag1/return_switch camelcase ejs make-dir mysql prettier rxjs yargs
```

# devDependencies
```bash
yarn add @babel/core @babel/preset-env @babel/preset-typescript @types/ejs @types/jest @types/mysql @types/node@^12 @types/prettier @types/yargs @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier jest ts-jest typescript --dev
```
