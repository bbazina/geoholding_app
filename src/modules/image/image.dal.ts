import { getRepository } from 'typeorm';
import { Image } from './image.model';

export class ImageDAL {
  private static readonly imageRepo = getRepository(Image);
  public static async findAll() {
    const images = await this.imageRepo.find();
    return images;
  }
}
