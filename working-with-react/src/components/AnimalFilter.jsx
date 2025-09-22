const animals = ['Cat', 'Dog', 'Elephant', 'Cow', 'Eagle']


const AnimalFilter = () => {
  return (
    <div className="card">
    <div className="section-title">Animals Starting with "E"</div>
    <ul>
    {filtered.map(a => <li key={a}>{a}</li>)}
    </ul>
    </div>
  )
}

export default AnimalFilter


