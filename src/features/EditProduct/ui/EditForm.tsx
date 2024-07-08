import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from '../model/types/formSchema';

import { editProduct, getProductsData } from '@/entities/Product';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { file2Base64 } from '@/shared/lib/file2Base64';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { RichTextEditor } from '@/shared/ui/rich-text-editor';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const EditForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const products = useSelector(getProductsData);
  const currentProduct = products?.find((product) => id === product.id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const imageRef = form.register('image');

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    return (async () => {
      const imageList = await Promise.all(
        Array.from(data.image).map(async (image) => {
          const result = await file2Base64(image);
          return result;
        })
      );
      await dispatch(editProduct({ ...data, image: imageList }, id));
      navigate(RoutePath.products);
    })();
  };

  useEffect(() => {
    if (currentProduct) {
      form.reset({
        name: currentProduct.name,
        price: currentProduct.price,
        status: currentProduct.status,
        description: currentProduct.description,
      });
    }
  }, [currentProduct, form]);

  if (!currentProduct) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-1/3 mx-auto bg-white p-4 rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">active</SelectItem>
                        <SelectItem value="archive">archive</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <RichTextEditor {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Media</FormLabel>
                <FormControl>
                  <Input type="file" {...imageRef} multiple />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button type="submit">Submit</Button>
            <Link to={RoutePath.products}>
              <Button>Cancel</Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};
