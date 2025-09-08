import { Link } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";


function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            alert("User created.")
        } catch (err) {
            alert("Error registering user.")
        }
    }


    return (
        <div className=" bg-gray-200 shadow-2xl rounded-2xl w-xl p-8 mt-15 mx-auto border
         border-gray-100">
            <h2 className="text-3xl font-bold mb-9 text-center">Create user</h2>
            <form className="grid gap-2" onSubmit={handleSubmit}>
                <input ref={nameRef} placeholder="Name" type="text" className="w-full px-4 py-2 border rounded-xl border-gray-500 focus:outline-none" />
                <input ref={emailRef} placeholder="E-mail" type="email" className="w-full px-4 py-2 border rounded-xl border-gray-500 focus:outline-none" />
                <input ref={passwordRef} placeholder="Password" type="password" className="w-full px-4 py-2 border rounded-xl border-gray-500 focus:outline-none" />
                <button className="w-full bg-lime-300 p-2 rounded-xl font-bold hover:bg-green-300">Register.</button>
            </form>
            <Link to="/login" className="text-center block mt-2">Already have an account? <span className="font-bold hover:underline">Login.</span></Link>
        </div>
    )

}

export default Register;