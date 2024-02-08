import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";

export const config = createConfig(
  getDefaultConfig({
    appName: "Mure Pools",
    chains: [sepolia],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  })
);

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
