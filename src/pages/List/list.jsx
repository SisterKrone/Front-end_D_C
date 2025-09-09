import { Link } from "react-router-dom"
import api from "../../services/api"
import { useEffect, useState } from "react"
import Header from "../components/Header.jsx"
function ListUsers() {
    const [usersList, setUsersList] = useState()

    useEffect(() => {
        async function loadUsers() {
            try {
                const token = localStorage.getItem('token')
                const { data: { users } } = await api.get('/list-users', {
                    headers: { Authorization: `Bearer ${token}` }

                })

                setUsersList(users)

            } catch (err) {
                alert("Loading error.")
            }

        }

        loadUsers()
    }, [])

    return (
        <>
            <Header />
            <div className=" bg-gray-200 shadow-2xl rounded-2xl w-100 p-8 mt-12 mx-auto border
         border-gray-100 opacity-90 mb-5">
                <h2 className="text-3xl font-bold mb-7 text-center">Users List</h2>
                <div className="grid gap-2 justify-items-center">
                    <ul className="grid gap-3 w-full">
                        {usersList && usersList.map(user => (
                            <li key={user.id} className="bg-gray-100 p-7 border grid gap-2 rounded-2xl border-gray-300">
                                <p className="border rounded-2xl p-1 border-gray-300"><span className="font-bold mx-2">Id:</span>{user.id}</p>
                                <p className="border rounded-2xl p-1 border-gray-300"><span className="font-bold mx-2">Name:</span>{user.name}</p>
                                <p className="border rounded-2xl p-1 border-gray-300"><span className="font-bold mx-2">E-mail:</span>{user.email}</p>
                            </li>
                        ))}

                    </ul>
                    <Link to="/login"><button className="font-bold text-2xl w-2xs bg-lime-300 p-2 rounded-xl hover:bg-green-300 ">Back</button></Link>
                </div>
            </div>
        </>
    )
}

export default ListUsers;