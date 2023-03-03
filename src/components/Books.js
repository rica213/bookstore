import Book from './Book';

const Books = () => (
  <>
    <Book title="Book one" author="Author one" />
    <form>
      <input type="text" placeholder="new book" />
      <input type="text" placeholder="author" />
      <button type="button">Add book</button>
    </form>
  </>
);

export default Books;
