import { useSelector } from 'react-redux';
import { userState } from '../../types/user';

function Username() {
  const username = useSelector((state: userState) => state.user.username);

  if (!username) {
    return null;
  }

  return (
    <div className="text-sm font-semibold hidden md:block">{username}</div>
  );
}

export default Username;
