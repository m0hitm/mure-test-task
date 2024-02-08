import { Address, Chain } from "viem";

export interface AppInfoProps {
  version: string;
  chainId: number;
  caller: string;
  chain: Chain;
}

export interface TransactionDialogProps {
  modal: boolean;
  activeStep: number;
  isDisabled: boolean;
  txError: boolean;
  handleModal: () => void;
}

export interface CreatePoolProps {
  chain: Chain;
  appName: string;
  version: string;
  appOwner: string;
  deadline: number;
  sig: string;
  caller: Address
}
