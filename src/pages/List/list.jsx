import api from "../../services/api"
import { useEffect } from "react"
function ListUsers() {

    async function loadUsers() {
        try {
            const response = await api.get('/list-users')
            localStorage.setItem('token', token)


        } catch (err) {
            alert("Login error, wrong e-mail or password.")
        }
    }


    return (
        <div>
            <h2>Users List</h2>
        </div>
    )
}

export default ListUsers;