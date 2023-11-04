import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 bg-primary-dark text-neutral-content">
      <div className="containerWrap flex justify-between">
        <p className="btn btn-ghost normal-case text-xl">Live Chat</p>
        {currentUser ? <button className="btn btn-ghost normal-case text-xl" onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  )
}

export default Navbar