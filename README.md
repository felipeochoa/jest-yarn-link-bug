# Reproduction repo for jest + yarn-link issue

## Installation

```sh
cd parent
yarn
```

## It works without linking

```sh
npm run test   # inside ./parent dir
```

You should see all tests pass:

> Test Suites: 1 passed, 1 total
> Tests:       1 passed, 1 total
> Snapshots:   0 total
> Time:        0.767s, estimated 1s

## It does not work if you link the child in

```sh
cd ../child
yarn link
cd ../parent
yarn link child
npm run test
```

You should see an import failure for `ts-jest`:

>    Cannot find module 'ts-jest' from 'index.js'
>
>    > 1 | exports.fn = function() { return 42; }
>      2 |
>
>      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:169:17)
>      at Object.<anonymous> (../child/index.js:1:103)


## It works if you install `ts-jest` in the child

```sh
cd ../child/
yarn add ts-jest
cd ../parent/
npm run test
```

You should see all tests pass again:

> Test Suites: 1 passed, 1 total
> Tests:       1 passed, 1 total
> Snapshots:   0 total
> Time:        0.655s
