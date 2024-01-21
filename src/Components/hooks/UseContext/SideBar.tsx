import { useUserContext } from "./context";

export default function Profile() {
  const user = useUserContext();
  return <h2 className="text-red-400">{user.name}</h2>;
}
