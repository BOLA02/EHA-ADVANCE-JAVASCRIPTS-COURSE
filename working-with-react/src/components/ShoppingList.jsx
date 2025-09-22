const shoppingList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];

const ShoppingList = () => {
  return (
    <div className="card">
      <div className="section-title">Shopping List</div>
            <ul>
            {shoppingList.map(item => (
            <li key={item} className={item === 'Eggs' ? 'struck' : ''}>{item}</li>
            ))}
            </ul>
                </div>
            )
            }

export default ShoppingList







