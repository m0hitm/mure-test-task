import axios from "axios";
import { GetSignatureProps, GetSignatureResponse } from "../types/types";

export async function getSignature(
  formValues: GetSignatureProps
): Promise<GetSignatureResponse> {
  const { data } = await axios.get(
    `/api?appName=${formValues.appName}&version=${
      formValues.version
    }&appOwner=${formValues.appOwner.toLowerCase()}&chainId=${
      formValues.chainId
    }&caller=${formValues.caller.toLowerCase()}`
  );

  const params = data.data.params;
  const signature = data.data.signature;

  return { signature, params };
}
