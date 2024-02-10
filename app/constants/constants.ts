import { Address } from "viem";

export const ALCHEMY_KEY = process.env.NEXT_PUBLIC_ALCHEMY_ID;
export const WALLET_CONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const SEPOLIA_RPC = `${process.env.NEXT_PUBLIC_SEPOLIA_RPC}${ALCHEMY_KEY}`;
export const MURE_POOL_FACTORY_CONTRACT =
  process.env.NEXT_PUBLIC_MURE_POOL_FACTORY_CONTRACT;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
