import React from 'react';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';

const exexes = [
  {
    id: "wvm_irys_xyz_load",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/wvm_irys_xyz_load",
    name: "Irys Data Uploader",
    description: "Upload data from Reth to Arweave via Irys.xyz",
    url: "https://github.com/weaveVM/wvm-reth/tree/6091facc0d8750d69a4b2de8137646a202401bb6/wvm-apps/wvm-exexed/crates/irys",
    tags: ["arweave", "block", "ETL"],
    license: "MIT"
  },
  {
    id: "wvm_mem_lambda",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/wvm_mem_lambda",
    "name": "MEM Lambda ExEx",
    "description": "MEM Lambda transactions relayer. Write smart contracts in JavaScript or Rust on top of WeaveVM",
    "url": "https://github.com/weaveVM/wvm-reth/tree/main/wvm-apps/wvm-exexed/crates/lambda",
    "tags": ["smart-contracts", "arweave", "transaction", "bridge"],
    "license": "MIT"
  },
  {
    id: "wvm_borsch_block",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/wvm_borsh_block",
    "name": "Borsh Block",
    "description": "serialize & deserialize block object in Borsh",
    "url": "https://github.com/weaveVM/wvm-reth/tree/6091facc0d8750d69a4b2de8137646a202401bb6/wvm-apps/wvm-exexed/crates/borsh",
    "tags": ["data-serialization", "block"],
    "license": "MIT"
  },
  {
    id: "wvm_bigquery",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/wvm_bigquery",
    "name": "GBQ Block ETL",
    "description": "Google BigQuery ETL",
    "url": "https://github.com/weaveVM/wvm-reth/tree/6091facc0d8750d69a4b2de8137646a202401bb6/wvm-apps/wvm-exexed/crates/bigquery",
    "tags": ["arweave", "block", "etl", "indexer", "cloud"],
    "license": "MIT"
  },
  {
    id: "ree_rollup",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/ree_rollup",
    "name": "Reth ExEx Examples Rollup",
    "description": "Rollup that derives the state from L1",
    "url": "https://github.com/paradigmxyz/reth-exex-examples/tree/main/rollup",
    "tags": ["paradigm-repo", "rollup"],
    "license": "MIT"
  },
  {
    id: "ree_remote",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/ree_remote",
    "name": "Reth ExEx Examples Remote",
    "description": "Emits notifications using a gRPC server, and a consumer that receives them",
    "url": "https://github.com/paradigmxyz/reth-exex-examples/tree/main/remote",
    "tags": ["paradigm-repo", "ipc"],
    "license": "MIT"
  },
  {
    id: "ree_op_bridge",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/ree_op_bridge",
    "name": "Reth ExEx Examples OP Bridge",
    "description": "Decodes Optimism deposit and withdrawal receipts from L1",
    "url": "https://github.com/paradigmxyz/reth-exex-examples/tree/main/minimal",
    "tags": ["paradigm-repo", "bridge"],
    "license": "MIT"
  },
  {
    id: "ree_minimal",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/ree_minimal",
    "name": "Reth ExEx Examples Minimal",
    "description": "Logs every chain commit, reorg and revert notification",
    "url": "https://github.com/paradigmxyz/reth-exex-examples/tree/main/minimal",
    "tags": ["paradigm-repo", "poc"],
    "license": "MIT"
  },
  {
    id: "ree_in_mem_state",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/ree_in_mem_state",
    "name": "Reth ExEx Examples In Memory State",
    "description": "Tracks the plain state in memory",
    "url": "https://github.com/paradigmxyz/reth-exex-examples/tree/main/in-memory-state",
    "tags": ["paradigm-repo", "memory"],
    "license": "MIT"
  },
  {
    id: "ree_discv5",
    repolink: "https://github.com/weaveVM/exex.rs/tree/main/exexes/ree_discv5",
    "name": "Reth ExEx Examples Discv5",
    "description": "Runs discv5 discovery stack",
    "url": "https://github.com/paradigmxyz/reth-exex-examples/tree/main/discv5",
    "tags": ["paradigm-repo", "node"],
    "license": "MIT"
  },

];

function App() {
  return (
    <div>
      <HeroSection />
      <CardGrid exexes={exexes} />
      <Footer />
    </div>
  );
}

export default App;
