import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Quantity = ({ quantity, inc, dec, theme }) => {
  return (
    <div className="flex last:border-r last:rounded-tr-lg last:rounded-br-lg first:rounded-tl-lg first:rounded-bl-lg overflow-hidden">
      <span className="flex-1 border flex items-center justify-center font-medium border-r-0">
        {quantity}
      </span>
    </div>
  );
};

export default Quantity;
