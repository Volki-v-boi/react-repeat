export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Ofline"}</p>
    </div>
  );
}
