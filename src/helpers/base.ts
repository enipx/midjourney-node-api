import type { MJConfigParam } from "midjourney";
import { Midjourney } from "midjourney";

let client: Midjourney | undefined;

export const getConfigParams = () => {
  const params: MJConfigParam = {
    ServerId: process.env.SERVER_ID as string,
    ChannelId: process.env.CHANNEL_ID as string,
    SalaiToken: process.env.SALAI_TOKEN as string,
    HuggingFaceToken: process.env.HUGGINGFACE_TOKEN as string,
    Debug: true,
    Ws: process.env.WS === "true",
  };

  console.log({ params });

  return params;
};

export const getClient = () => {
  if (client) {
    return client;
  }

  const params = getConfigParams();

  client = new Midjourney(params);

  return client;
};
