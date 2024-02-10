import { getDefaultConfig } from "connectkit";
import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { SEPOLIA_RPC } from "./app/constants/constants";


export const config = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(SEPOLIA_RPC),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
