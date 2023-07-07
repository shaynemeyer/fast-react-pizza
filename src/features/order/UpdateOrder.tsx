import { useFetcher } from 'react-router-dom';
import { orderItem } from '../../types/orders';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

interface UpdateOrderProps {
  order: orderItem;
}

function UpdateOrder({ order }: UpdateOrderProps) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function updateOrderAction({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
