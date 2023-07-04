import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { menuItem } from '../../types/menu';

function Menu() {
  const menu = useLoaderData() as Array<menuItem>;
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = (await getMenu()) as Array<menuItem>;
  return menu;
}

export default Menu;
