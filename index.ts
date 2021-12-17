import fetch from "node-fetch";
import { TOKEN_LIST_URL } from "@jup-ag/core";

const main = async () => {
  const tokens = await (await fetch(TOKEN_LIST_URL["mainnet-beta"])).json();
  console.log(tokens);
};
main();
