import React from 'react'


const products = [
{ id: 1, name: 'Laptop', price: 1200 },
{ id: 2, name: 'Headphones', price: 200 },
{ id: 3, name: 'Mouse', price: 50 }
]


export default function ProductList(){
return (
<div className="card">
<div className="section-title">Product List</div>
<ul>
{products.map(p => (
<li key={p.id} className={p.price > 500 ? 'expensive' : ''}>
{p.name} - ${p.price}
</li>
))}
</ul>
</div>
)
}