import { NavLink } from '@remix-run/react';


interface Props {
  name: string;
  value: number;
  currency: string;
  mainImage: string;
  id: string;
}

const Product: React.FC<Props> = (props) => {
  const { name, value, currency, id, mainImage } = props;

  return (
    <NavLink to={`/product-detail/${id}`} className='block'>
      <img src={mainImage} alt={name} className='w-full h-[265px] bg-grey object-cover' />
      <small className='font-bold mt-3 block'>
        {name}
      </small>
      <p className='py-2 text-16'>
        {currency} {value}
      </p>
    </NavLink>
  );
}

export default Product;
