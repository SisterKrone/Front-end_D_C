import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";
import Header from "../components/Header";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const { data: token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            localStorage.setItem('token', token)


            navigate('/list-users')

        } catch (err) {
            alert("Login error, wrong e-mail or password.")
        }
    }


    return (
        <>
        <Header />
            <div className=" bg-gray-200 shadow-2xl rounded-2xl w-xl p-8 mt-15 mx-auto border
         border-gray-100 opacity-90">
                <h2 className="text-3xl font-bold mb-9 text-center">Login</h2>
                <form className="grid gap-2" onSubmit={handleSubmit}>
                    <input ref={emailRef} placeholder="E-mail" type="email" className="w-full px-4 py-2 border rounded-xl border-gray-500 focus:outline-none" />
                    <input ref={passwordRef} placeholder="Password" type="password" className="w-full px-4 py-2 border rounded-xl border-gray-500 focus:outline-none" />
                    <button className="w-full bg-lime-300 p-2 rounded-xl font-bold hover:bg-green-300">Login</button>
                </form>
                <Link to="/" className="text-center block mt-2">Don't have an account? <span className="font-bold hover:underline">Register.</span></Link>
            </div>
        </>
    )

}

export default Login;