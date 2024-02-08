import { getWalletClient, getPublicClient } from "./walletClient";
import { CreatePoolProps } from "../types/types";
import { MURE_POOL_FACTORY_CONTRACT } from "../constants/constants";
import { MURE_POOL_FACTORY_ABI } from "../abis/MurePoolFactory";

export default async function createPool(props: CreatePoolProps) {
  const { chain, appName, version, appOwner, deadline, sig, caller } = props;

  const walletClient = await getWalletClient(chain);
  const publicClient = await getPublicClient(chain);
  const { request } = await publicClient.simulateContract({
    address: MURE_POOL_FACTORY_CONTRACT,
    abi: MURE_POOL_FACTORY_ABI,
    functionName: "deployAppProxy",
    args: [appName, version, appOwner, deadline, sig],
    account: caller,
  });

  console.log("proxy request", request);
  const proxy = await walletClient.writeContract(request);
  console.log("proxy", proxy);
}
