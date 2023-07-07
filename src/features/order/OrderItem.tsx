import { cartItem } from '../../types/cart';
import { formatCurrency } from '../../utils/helpers';

interface OrderItemProps {
  item: cartItem;
  isLoadingIngredients?: boolean;
  ingredients?: string[];
}

function OrderItem({
  item,
  isLoadingIngredients = false,
  ingredients,
}: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
