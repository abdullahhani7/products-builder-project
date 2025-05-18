import type { IProduct } from "../data";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}
function ProductCard({ product }: IProps) {
  const { description, title, imageURL ,category,price} = product;
  return (
    <div className="border p-2 rounded-md flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0">
      <Image
        imageURL={imageURL}
        alt="product-img"
        className="rounded-md mb-2"
      />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>

        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700" width="w-full">
          EDIT
        </Button>
        <Button className="bg-red-700 " width="w-full">
          DELETE
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
