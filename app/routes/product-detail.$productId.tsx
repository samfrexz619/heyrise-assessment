import { useParams } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from '@remix-run/react';
import { Button } from "components/ui/button";
import { useState } from "react";
import { getApi } from '~/api';


export const meta: MetaFunction = () => {
  return [
    { title: 'Heyrise Frontend Assessment' },
    {
      name: 'description',
      content: 'Welcome to the Heyrise Frontend Assessement',
    },
  ];
};

export const loader = async () => {
  const { productsApi } = getApi();
  const products = await productsApi.getProducts();

  return { products };
};

const ProductDetail: React.FC = () => {
  const { products } = useLoaderData<typeof loader>();

  const { productId } = useParams();

  const productDetail = products.find(item => productId === item?.id)

  const [qty, setQty] = useState(0);

  const increment = () => setQty(prevCount => prevCount + 1);

  const decrement = () => {
    setQty(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };


  console.log(productDetail?.images)
  return (
    <section className="w-5/6 mx-auto lg:flex gap-x-14 py-20 h-full">
      <div className="grid grid-flow-col auto-cols-[70%] md:auto-cols-auto overflow-x-auto overscroll-x-contain snap-mandatory scroll-px-1 md:grid-cols-2 w-full lg:w-1/2 gap-5 mb-5 lg:mb-0 md:grid-flow-row">
        {productDetail?.images?.map((item, idx) => (
          <img key={idx} src={item} alt="random image" className="h-[250px] w-full bg-grey1" />
        ))}
      </div>
      <section className="w-full lg:w-1/2 h-full">
        <div>
          <h2 className="text-black1 font-semibold text-4xl">{productDetail?.name}</h2>
          <p className='py-2 text-16'>
            {productDetail?.price?.currency!} {productDetail?.price?.value!}
          </p>
        </div>
        <div className="mt-8">
          <p>{productDetail?.description!}</p>
        </div>
        <div className="pt-10">
          <h4 className="text-grey">Variants</h4>
          {productDetail?.variants?.map((item, idx) => (
            <div key={idx} className="flex gap-x-1 lg:gap-x-3">
              <Button className="rounded-none hover:text-white mt-4 bg-body border border-black1 w-full md:w-[108px] text-black1 flex items-center justify-center h-[50px] font-semibold text-16">{item[0]}</Button>

              <Button className="rounded-none hover:text-white mt-4 bg-body border border-black1 w-full md:w-[108px] text-black1 flex items-center justify-center h-[50px] font-semibold text-16">{item[1]}</Button>

              <Button className="rounded-none hover:text-white mt-4 bg-body border border-black1 w-full md:w-[108px] text-black1 flex items-center justify-center h-[50px] font-semibold text-16">{item[2]}</Button>
            </div>
          ))}
          <div className="mt-20 flex flex-wrap-reverse gap-x-4 gap-y-5 md:gap-y-0">
            <div className="w-full md:w-[350px]">
              <Button className="w-full h-[50px] rounded-none">
                Add to Cart
              </Button>
              <small className="block">Free standard shipping</small>
            </div>

            <div className="relative w-[80px]">
              <p className="absolute -top-7">Quantity</p>
              <div className="flex w-full h-[50px] items-center border border-black1 gap-x-3 justify-center">
                <button onClick={decrement} className="text-2xl">-</button>
                <p>{qty}</p>
                <button onClick={increment} className="text-2xl">+</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProductDetail;
