import { toast } from "react-toastify";
// import { formMode } from "json/enums";
import apiErrorMsg from "../json/apiErrorMsg";

let { code, msg } = apiErrorMsg;

function showAPIError(error) {
  const errorMapping = {
    [code.ERR_NETWORK]: msg.NETWORK_MSG,
    [code.ERR_BAD_REQUEST]: error.message || error.data?.errors,
  };
  toast.error(errorMapping[error.code]);
  return {};
}

export { showAPIError };
