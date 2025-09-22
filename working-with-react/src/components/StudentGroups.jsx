import React from 'react'


const students = [
{ id: 1, name: 'Alice', grade: 'A' },
{ id: 2, name: 'Bob', grade: 'B' },
{ id: 3, name: 'Charlie', grade: 'A' },
{ id: 4, name: 'David', grade: 'C' }
]


export default function StudentGroups(){
const grouped = students.reduce((acc, s) => {
acc[s.grade] = acc[s.grade] || []
acc[s.grade].push(s)
return acc
}, {})


const grades = Object.keys(grouped).sort()


return (
<div className="card">
<div className="section-title">Student Groups by Grade</div>
{grades.map(grade => (
<div key={grade} style={{marginBottom:8}}>
<div className="group-heading">Grade {grade}</div>
<ul>
{grouped[grade].map(s => <li key={s.id}>{s.name}</li>)}
</ul>
</div>
))}
</div>
)
}