## About
[exex.rs](https://exex.rs) is a platform where you can find a curated list of Reth ExExes, AKA "the chainlist of ExExes". ***Note that [exex.rs](https://exex.rs) is not affiliated with the Paradigm team or the Reth team.***

## What are Execution Extensions?
Execution Extensions (or ExExes, for short) allow developers to build their own infrastructure that relies on Reth as a base for driving the chain (be it Ethereum or OP Stack) forward.

An Execution Extension is a task that derives its state from changes in Reth's state. Some examples of such state derivations are rollups, bridges, and indexers.

They are called Execution Extensions because the main trigger for them is the execution of new blocks (or reorgs of old blocks) initiated by Reth. [source](https://reth.rs/developers/exex/exex.html)

## Add an ExEx Object

To add an ExEx object, follow these steps in your PR:

1. Create a directory under [exexes](./exexes) with a unique name that follows the snake_case naming convention.
- If the ExEx is developed by a team or project, it is preferable to add a prefix to the ExEx name while naming your directory. For example, `ree_` refers to [Reth ExEx Examples](https://github.com/paradigmxyz/reth-exex-examples) and `wvm_` refers to [WeaveVM](https://github.com/weaveVM/wvm-reth).

2. Create a data.json File: In your ExEx object directory, create a data.json file following the structure provided in the [exex template](./exexes/_template_exex/data.json).

3. Ensure that your tags are supported. If the tags you need are not supported, create a GitHub issue to add the tags.

#### Tags list

| tag  | description |
| :-------------: |:-------------:|
| `block`      | block related operations     |
| `transaction`      | transaction related operations     |
| `node`      | node level usecase    |
| `memory`      | memory level usecase    |
| `poc`      | Proof Of Concept     |
| `etl`      | ETL pipeline   |
| `indexer`      | self-descriptive   |
| `bridge`      | data or assets bridge  |
| `rollup`      | rollups related usecase   |
| `ipc`      | inter-process communications (network protocols: gRPC, RPC etc)  |
|`data-serialization`| self-descriptive |
|`arweave`| Arweave related operations |
|`cloud`| self-descriptive |
|`data-serialization`| self-descriptive |
|`smart-contracts`| smart contracts related operations|
|`paradigm-repo`| ExExes curated from (or created by) Paradigm org|
|`db`| database usecases |

## License
This project is licensed under the [MIT License](./LICENSE)
