import axiosPrivate from "../axiosintercepter/Intercepter";
import { showAPIError } from "../../Utility/apiutils";
export async function updateUser() {
  axiosPrivate
    .post("Account/", {
      email: "mayank@yopmail.com",
      password: "Chetu@123",
      isOtp: false,
    })
    .then((res) => console.log(res, "succesfull stuff to be done here"))
    .catch((err) => showAPIError(err)); // promise
}
