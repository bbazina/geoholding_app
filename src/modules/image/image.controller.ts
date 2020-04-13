import { Request, Response } from 'express';
import { ImageDAL } from './image.dal';

export class ImageController {
  public static async getImages(req: Request, res: Response) {
    const images = await ImageDAL.findAll();
    return res.json({ data: images });
  }
}
