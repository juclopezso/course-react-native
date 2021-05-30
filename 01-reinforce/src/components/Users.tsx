import { useUsers } from "../hooks/useUsers"
import { User } from "../interfaces/reqRes"


export const Users = () => {

  const {users, nextPage, prevPage} = useUsers()

  const renderUser = ({id, first_name, last_name, email, avatar}: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img 
            src={avatar} 
            alt="avatar"
            style={{
              width: 40,
              borderRadius: 100
            }}
            />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => renderUser(user))
          }
        </tbody>
      </table>
      <button 
        className="btn btn-secondary"
        onClick={prevPage}
        >Prev
      </button>
      &nbsp;
      <button 
        className="btn btn-primary"
        onClick={nextPage}
        >Next
      </button>
    </>
  )
}
