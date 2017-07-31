declare type _contractTest = (accounts: string[]) => void;
declare function contract(name: string, _contractTest): void;

declare interface Contract {
  deployed(): Promise<object>,
}

declare interface MetaCoinInstance {
  getBalance(account: string): number;
}

declare interface MetaCoinContract extends Contract {
  deployed(): Promise<MetaCoinInstance>
}

interface Artifacts {
  require(name: "./MetaCoin.sol"): MetaCoinContract,
}

declare var artifacts: Artifacts;
