import { useLoaderData } from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';
import { getApi } from '~/api';
import Banner from 'components/products/Banner';
import { useMemo, useState } from 'react';
import Product from 'components/products/Product';
import { Button } from 'components/ui/button';
import { ChevronDown } from 'lucide-react';
import ProductNav from 'components/products/ProductNav';


export const meta: MetaFunction = () => {
  return [
    { title: 'Heyrise Product page' },
    {
      name: 'description',
      content: 'Welcome to the Heyrise product page',
    },
  ];
};

export const loader = async () => {
  const { productsApi } = getApi();
  const products = await productsApi.getProducts();

  return { products };
};

const product: React.FC = () => {

  const { products } = useLoaderData<typeof loader>();

  const [search, setSearch] = useState('')
  const [allProducts, setAllProducts] = useState(products);

  const filteredProducts = useMemo(() => allProducts.filter(product => product.name?.toLowerCase().includes(search.toLowerCase())), [allProducts, search])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSort = () => {
    const sortedProducts = filteredProducts.sort((a, b) => a.name! > b.name! ? 1 : -1)
    setAllProducts(sortedProducts)
  }

  const clearSearch = () => {
    setSearch('')
    setAllProducts(products) //3053272989
  }

  const handleFilter = (item: string) => {
    const filteredCategory = products.filter(product => product.category === item)
    setAllProducts(filteredCategory)
  }
  console.log(products);

  return (
    <section className='w-full'>
      <header className='h-[216px] w-full bg-black1'>
        <Banner />
      </header>

      <section className='w-5/6 mx-auto block lg:grid lg:grid-cols-5 mt-10 gap-x-5'>
        {/* product category */}
        <aside className='col-span-1'>
          <ProductNav
            value={search}
            handleSearch={handleSearch}
            clearSearch={clearSearch}
            handleFilter={handleFilter}
          />
        </aside>

        {/* product images */}
        <aside className='col-span-4'>
          <div className='w-full flex justify-end mb-10'>
            <div>
              <Button onClick={handleSort} className='rounded-none hover:text-white mt-4 bg-body border border-black1 w-[200px] text-black1 flex items-center justify-between h-[37px] font-semibold'>
                <span className='text-grey text-13'>Sort By</span>
                <div className='flex gap-x-2 items-center'>
                  <span className='text-13 font-semibold'>Ascending</span>
                  <ChevronDown />
                </div>
              </Button>
              <p className='text-right text-14 mt-1'>Showing {filteredProducts.length} Products</p>
            </div>
          </div>
          <div className='grid h-[500px] overflow-y-auto reset md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-11'>
            {filteredProducts.map(item => (
              <Product
                key={item.id}
                name={item?.name!}
                value={item?.price?.value!}
                currency={item.price?.currency!}
                mainImage={item?.mainImage!}
                id={item?.id!}
                category={item?.category!}
              />
            ))}
          </div>
        </aside>
      </section>
    </section>
  );
}

export default product;
