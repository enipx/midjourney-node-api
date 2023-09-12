import type { Request, Response } from "express";
import { getClient } from "../helpers/base";

export const upscaleHandler = async (req: Request, res: Response) => {
  try {
    const { content, index, msgId, id, hash, flags = 0 } = req.body;

    const imageId = id || msgId || "";

    if (!imageId) {
      return res.status(400).json({ message: "Image id is required" });
    }

    if (!index) {
      return res.status(400).json({ message: "Index is required" });
    }

    if (!hash) {
      return res.status(400).json({ message: "Hash is required" });
    }

    const client = getClient();

    await client.init();

    const imagineRes = await client.Upscale({
      content,
      index,
      msgId: imageId,
      hash,
      flags,
    });

    client.Close();

    return res.status(200).json(imagineRes).end();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

// @TODO: implement this
export const streamUpscaleHandler = async (req: Request, res: Response) => {};
