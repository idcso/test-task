import { ProductStatus } from '@/entities/Product';
import { z } from 'zod';

const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters',
  }),
  price: z.string().min(1, { message: 'provide a price' }),
  description: z.string(),
  status: z.nativeEnum(ProductStatus),
  image: z
    .instanceof(FileList)
    .refine((files) => {
      return Array.from(files ?? []).length !== 0;
    }, 'image is required')
    .refine((files) => {
      return Array.from(files ?? []).every((file) =>
        ACCEPTED_IMAGE_TYPES.includes(file.type)
      );
    }, 'file type is not supported'),
});
