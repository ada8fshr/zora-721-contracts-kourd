/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISerialSingleMintable } from "./ISerialSingleMintable";

export class ISerialSingleMintableFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISerialSingleMintable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISerialSingleMintable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mintSerial",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
    ],
    name: "mintSerials",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
