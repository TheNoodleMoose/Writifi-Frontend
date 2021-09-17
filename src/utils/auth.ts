import Cookies from "js-cookie";

export const getJwtToken = () => Cookies.get("crsToken") || "";
