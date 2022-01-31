import axios from "axios";

const request = async (options: any) => await axios(options);

export { request };
