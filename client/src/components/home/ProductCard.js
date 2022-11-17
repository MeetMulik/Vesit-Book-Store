import currency from "currency-formatter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ProductCard = ({ product }) => {
  console.log(product);
  const percentage = product.discount / 100;
  const discountPrice = product.price - product.price * percentage;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full sm:w-6/12 md:w-4/12 xl:w-3/12 px-5 py-10 shadow-lg mr-5"
      key={product._id}
    >
      <Link to={`/product/${product._id}`}>
        <div className="w-full">
          <img
            src={`/images/${product.image1}`}
            alt="product image"
            className="w-full h-[310px] object-cover"
          />
        </div>
        <p className="capitalize text-base font-medium text-black my-2.5">
          {product.title}
        </p>
        <p className="text-base font-medium text-black my-2.5">
          Owner: {product.createdBy}
        </p>

        <div className="flex justify-between">
          <span className="text-md font-medium text-black">
            Phone Number:
            {product?.phoneNumber}
          </span>
          <span className="text-lg font-medium text-gray-600 ml-2 ">
            Price : ₹{product.price}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
