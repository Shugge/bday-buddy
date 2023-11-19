import {useState} from 'react';
import Person from './Person';

const List = (props) => {
  const peopleArr = props.data;
  const [people, setPeople] = useState(peopleArr);

  const clearAll = () => {
    setPeople([]);
  }

  return (
    <>
    <main>
        <section className='container'>
            <h3>{`${people.length} Birthdays Today`}</h3>
            <ul>
            {people.map((person) => {
                return <Person key={person.id} person={person}/>;
            })}
            </ul>
            <button type="button" className='btn btn-block' onClick={clearAll}>Clear All</button>
        </section>
    </main>
    </>
  )
}
export default List