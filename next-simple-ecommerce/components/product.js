import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";


function Product({id, title, price, description, category, image, rating}){

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3 self-center">{title}</h4>
            <div className="flex self-center">
                {Array(rating).fill().map((_,i)=>(
                    <p></p>
                    // <StarIcon className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-2 self-center">{description}</p>
            <div className="inline-block self-center">
                {`$` + price}
            </div>
            <button className="mt-auto button">Add to Basket</button>

        </div>
    );
}

export default Product;