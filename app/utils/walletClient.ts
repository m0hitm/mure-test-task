import {
  Address,
  Chain,
  createPublicClient,
  createWalletClient,
  custom,
} from "viem";

export async function getWalletClient(chain: Chain) {
  const walletClient = createWalletClient({
    chain: chain,
    transport: custom(window.ethereum),
  });

  const [address] = await walletClient.getAddresses();
  return { walletClient, address };
}

export async function getPublicClient(chain: Chain) {
  const publicClient = createPublicClient({
    chain: chain,
    transport: custom(window.ethereum),
  });

  return publicClient;
}
