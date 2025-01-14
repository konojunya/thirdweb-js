import { AbiInput, AbiSchema } from "../../schema/contracts/custom";

/**
 *
 * @param abi
 * @param functionName
 * @returns
 * @internal
 */
export function extractFunctionParamsFromAbi(
  abi: AbiInput,
  functionName: string,
) {
  const parsedAbi = AbiSchema.parse(abi || []);
  for (const input of parsedAbi) {
    if (input.type === "function" && input.name === functionName) {
      return input.inputs || [];
    }
  }
  return [];
}
