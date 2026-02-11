import BookList from "../BookList/BookList";
import MailBox from "../MailBox/MailBox";
import Products from "../Products/Products";

export default function App() {
  // const userName = "Vasya";
  // const message = [];
  const favBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
  ];
  return (
    <>
      {/* <h1>Best seling</h1> */}

      {/* <Products
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Products
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      /> */}
      {/* _____________________________ */}

      {/* <MailBox userName={userName} message={message} /> */}
      {/* _____________________________ */}
      <BookList books={favBooks} />
    </>
  );
}
