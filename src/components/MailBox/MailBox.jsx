export default function MailBox({ userName, message }) {
  return (
    <>
      <p>Hello {userName}</p>

      <p>
        {message.length > 0
          ? `You have ${message.length} unread messages`
          : "No unread messages"}
      </p>
    </>
  );
}
