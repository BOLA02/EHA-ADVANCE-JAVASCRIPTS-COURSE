const books = ['React Basics', 'Learning TypeScript', 'Advanced JavaScript']



const BookList = () => {
  return (
   <div className="card">
    <div className="section-title">Book List</div>
    <ol>
    {books.map((b,i) => <li key={i}>{b}</li>)}
    </ol>
    </div>
  )
}

export default BookList

