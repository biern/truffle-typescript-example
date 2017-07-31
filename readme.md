# What it is?

Minimal example integration of Truffle + TypeScript + TestRPC run in docker, for writing smart contracts on Ethereum blockchain.

# Usage

Build and run truffle and testrpc images

```shell
$ cd docker
$ docker-compose build
$ docker-compose up
```

Truffle app lies in `src` subdirectory.

# Running tests

```shell
$ cd docker
$ ./exec_tests.sh
```

See source code for more.
