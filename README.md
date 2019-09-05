# gen_mysql_entities_cli

generate most used mysql entity functions in our codebase

# version

1.1.0

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
yarn add @ag1/mysql_rx_wrapper @ag1/nil @ag1/return_switch change-case ejs mkdirp mysql prettier rxjs yargs
```

# devDependencies
```bash
yarn add @babel/core @babel/preset-env @babel/preset-typescript @types/ejs @types/jest @types/mkdirp @types/mysql @types/node@^10 @types/prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/yargs eslint eslint-config-prettier eslint-plugin-prettier jest ts-jest typescript --dev
```
