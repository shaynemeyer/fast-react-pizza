import { cartItem } from '../../types/cart';
import { formatCurrency } from '../../utils/helpers';

interface OrderItemProps {
  item: cartItem;
}

function OrderItem({ item }: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className='py-3'>
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
