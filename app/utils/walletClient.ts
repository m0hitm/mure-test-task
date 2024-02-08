import {
  Address,
  Chain,
  createPublicClient,
  createWalletClient,
  http,
} from "viem";

export async function getWalletClient(chain: Chain) {
  const walletClient = createWalletClient({
    chain: chain,
    transport: http(chain.rpcUrls.default.http[0]),
  });

  return walletClient;
}

export async function getPublicClient(chain: Chain) {
  const publicClient = createPublicClient({
    chain: chain,
    transport: http(chain.rpcUrls.default.http[0]),
  });

  return publicClient;
}
