declare type _contractTest = (accounts: string[]) => void;
declare function contract(name: string, test: _contractTest): void;
declare interface TransactionMeta {
  from: string,
}

declare interface Contract {
  deployed(): Promise<object>,
}

declare interface MetaCoinInstance {
  getBalance(account: string): number;
  getBalanceInEth(account: string): number;
  sendCoin(account: string, amount: number, meta?: TransactionMeta): Promise<void>;
}

declare interface MetaCoinContract extends Contract {
  deployed(): Promise<MetaCoinInstance>
}

interface Artifacts {
  require(name: "./MetaCoin.sol"): MetaCoinContract,
}

declare var artifacts: Artifacts;
