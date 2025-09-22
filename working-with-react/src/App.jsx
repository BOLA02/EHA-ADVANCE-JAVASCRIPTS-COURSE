
import './App.css'
import ShoppingList from './components/ShoppingList'
import ProductList from './components/ProductList'
import MenuCategories from './components/MenuCategories'
import BookList from './components/BookList'
import AnimalFilter from './components/AnimalFilter'
import StudentGroups from './components/StudentGroups'
import MessageList from './components/MessageList'


export default function App(){
return (
<div className="container">
<div className="app-title">Working with React — Mapping Exercises</div>
<div className="app-sub">Seven small components demonstrating list rendering, conditional styling, filtering, and grouping.</div>


<div className="grid">
<section className="section">
<h2 className="section-title">Exercise 1: Shopping List</h2>
<ShoppingList />
</section>


<section className="section">
<h2 className="section-title">Exercise 2: Product List</h2>
<ProductList />
</section>


<section className="section">
<h2 className="section-title">Exercise 3: Menu Categories</h2>
<MenuCategories />
</section>


<section className="section">
<h2 className="section-title">Exercise 4: Book List</h2>
<BookList />
</section>


<section className="section">
<h2 className="section-title">Exercise 5: Animal Filter</h2>
<AnimalFilter />
</section>


<section className="section">
<h2 className="section-title">Exercise 6: Student Groups</h2>
<StudentGroups />
</section>


<section className="section">
<h2 className="section-title">Exercise 7: Message List</h2>
<MessageList />
</section>
</div>
</div>
)
}