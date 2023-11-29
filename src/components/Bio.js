
const Bio = ({user, files}) => {

  return (
    <div>
        <ul>
            <li>Name: {user?.name}</li>
            <li>course: {user?.course}</li>
            <li>height:{user?.height}</li>
        </ul>
        <h3>{files}</h3>

    </div>
  )
}

export default Bio