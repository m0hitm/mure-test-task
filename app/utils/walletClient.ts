import {
  Address,
  Chain,
  createPublicClient,
  createWalletClient,
  http,
} from "viem";
import { SEPOLIA_RPC } from "../constants/constants";

export async function getWalletClient(chain: Chain) {
  const walletClient = createWalletClient({
    chain: chain,
    transport: http(SEPOLIA_RPC),
  });

  const [address] = await walletClient.getAddresses();
  return { walletClient, address };
}

export async function getPublicClient(chain: Chain) {
  const publicClient = createPublicClient({
    chain: chain,
    transport: http(SEPOLIA_RPC),
  });

  return publicClient;
}
