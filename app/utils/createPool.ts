import { getWalletClient, getPublicClient } from "./walletClient";
import { CreatePoolProps } from "../types/types";
import { MURE_POOL_FACTORY_CONTRACT } from "../constants/constants";
import { MURE_POOL_FACTORY_ABI } from "../abis/MurePoolFactory";
import { Address, parseEventLogs } from "viem";
export default async function createPool(props: CreatePoolProps) {
  const { chain, appName, version, appOwner, deadline, sig, data } = props;

  const { walletClient, address } = await getWalletClient(chain);

  const publicClient = await getPublicClient(chain);
  const { request } = await publicClient.simulateContract({
    account: address,
    address: MURE_POOL_FACTORY_CONTRACT as Address,
    abi: MURE_POOL_FACTORY_ABI,
    functionName: "deployAppProxy",
    args: [appName, version, appOwner, deadline, data, sig],
  });

  const txHash = await walletClient.writeContract(request);
  const txRecipt = await publicClient.waitForTransactionReceipt({
    hash: txHash,
  });

  const logs = parseEventLogs({
    abi: MURE_POOL_FACTORY_ABI,
    logs: txRecipt.logs,
    eventName: "Deployment",
  });

  const appAddress = logs[0].args.appAddress;
  const deployedAppAddresses = JSON.parse(
    localStorage.getItem("appAddresses") || "[]"
  );

  deployedAppAddresses.push(appAddress);
  localStorage.setItem("appAddresses", JSON.stringify(deployedAppAddresses));

  return appAddress;
}
