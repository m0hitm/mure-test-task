export const MURE_POOL_FACTORY_ABI = [
  {
    inputs: [
      { internalType: "address", name: "beaconAddress_", type: "address" },
      { internalType: "address", name: "config_", type: "address" },
      { internalType: "string", name: "name_", type: "string" },
      { internalType: "string", name: "version_", type: "string" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "InvalidAddress",
    type: "error",
  },
  { inputs: [], name: "InvalidShortString", type: "error" },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "SignatureExpired", type: "error" },
  {
    inputs: [{ internalType: "string", name: "str", type: "string" }],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beaconAddress",
        type: "address",
      },
    ],
    name: "BeaconUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "appName",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "appOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "appAddress",
        type: "address",
      },
      { indexed: false, internalType: "string", name: "data", type: "string" },
    ],
    name: "Deployment",
    type: "event",
  },
  { anonymous: false, inputs: [], name: "EIP712DomainChanged", type: "event" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "beaconAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "config",
    outputs: [
      { internalType: "contract MureConfig", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "appName", type: "string" },
      { internalType: "string", name: "version", type: "string" },
      { internalType: "address", name: "appOwner", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "string", name: "data", type: "string" },
      { internalType: "bytes", name: "sig", type: "bytes" },
    ],
    name: "deployAppProxy",
    outputs: [{ internalType: "address", name: "proxy", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { internalType: "bytes1", name: "fields", type: "bytes1" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "version", type: "string" },
      { internalType: "uint256", name: "chainId", type: "uint256" },
      { internalType: "address", name: "verifyingContract", type: "address" },
      { internalType: "bytes32", name: "salt", type: "bytes32" },
      { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "beaconAddress_", type: "address" },
    ],
    name: "setBeaconAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
