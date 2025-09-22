import React from 'react'


const menu = [
{ category: 'Fruits', items: ['Apple', 'Banana', 'Orange'] },
{ category: 'Vegetables', items: ['Carrot', 'Spinach'] }
]


export default function MenuCategories(){
return (
<div className="card">
<div className="section-title">Menu Categories</div>
{menu.map(({category, items}) => (
<section key={category} style={{marginBottom:12}}>
<h3 style={{margin:'6px 0'}}>{category}</h3>
<ul>
{items.map(item => <li key={item}>{item}</li>)}
</ul>
</section>
))}
</div>
)
}