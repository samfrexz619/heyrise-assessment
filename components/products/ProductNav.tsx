import { Checkbox } from "components/ui/checkbox";
import { Label } from "components/ui/label";
import { SearchIcon } from "lucide-react";


interface Props {
  value: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
}

const ProductNav: React.FC<Props> = ({ value, handleSearch, clearSearch }) => {

  return (
    <div className='w-full'>
      <div className='flex items-center lg:gap-x-4 justify-between lg:justify-start'>
        <h4>Filters</h4>
        <button onClick={clearSearch} className='underline text-grey1'>Clear filters</button>
      </div>
      <div className='flex w-[200px] items-center mt-2'>
        <SearchIcon className='pr-2' />
        <input
          value={value}
          onChange={handleSearch}
          type="search"
          placeholder='Start typing to search'
          className='w-full placeholder:text-grey border-none outline-none bg-inherit focus:ring-0 text-14'
        />
      </div>
      <div className="pt-12">
        <h3 className="font-bold text-14">Categories</h3>
        <div className="mt-4">
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id='cat1' />
            <Label className="text-13" htmlFor='cat1'>Category1</Label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id='cat2' />
            <Label className="text-13" htmlFor='cat2'>Category2</Label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id='cat3' />
            <Label className="text-13" htmlFor='cat3'>Category3</Label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id='cat4' />
            <Label className="text-13" htmlFor='cat4'>Category4</Label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductNav;
