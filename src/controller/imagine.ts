import type { Request, Response } from "express";
import { getClient } from "../helpers/base";

export const imagineHandler = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const client = getClient();

    await client.init();

    const imagineRes = await client.Imagine(prompt);

    client.Close();

    return res.status(200).json(imagineRes).end();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

// @TODO: implement this
export const streamImagineHandler = async (req: Request, res: Response) => {};
