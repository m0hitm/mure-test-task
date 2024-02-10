import { Address, Chain, PrivateKeyAccount } from "viem";

export interface AppInfoProps {
  version: string;
  chainId: number;
  caller: Address;
  chain: Chain;
}

export interface TransactionDialogProps {
  modal: boolean;
  activeStep: number;
  isDisabled: boolean;
  txError: boolean;
  handleModal: () => void;
}

export interface GetSignatureProps {
  appName: string;
  version: string;
  appOwner: Address;
  chainId: number;
  caller: Address;
}

export interface GetSignatureResponse {
  params: CreatePoolProps;
  signature: Address;
}

export interface CreatePoolProps {
  chain: Chain;
  appName: string;
  version: string;
  appOwner: Address;
  deadline: bigint;
  sig: Address;
  data: string;
}
