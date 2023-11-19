const Person = (props) => {
  const {name, age, image} = props.person;
  return (
    <li className="person">
        <img src={image} alt={name} />
        <div>
            <h4>{name}</h4>
            <p>{age}</p>
        </div>
    </li>
  )
}
export default Person