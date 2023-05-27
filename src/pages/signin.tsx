import { FormEvent, useState } from "react"
import signInBg from "../../public/signin-bg-2.png"
import { Link } from "react-router-dom"

function SignInPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(`Email: ${email}\nPassword: ${password}`)
        alert("LOGIN IS A SUCCESS")
    }

    return (
    <div className="w-full flex flex-col md:flex-row h-screen justify-center">
        <div className="w-full mt-12 px-6 mb-4 text-center md:text-start self-center h-screen md:h-auto">
            <Link to="/">
                <p className="text-2xl font-semibold text-black mb-4 hover:animate-pulse w-fit ease-linear transition-all">
                Cloud App
            </p></Link>
            <form onSubmit={e => handleForm(e)} className="w-full">
                <p className="text-4xl font-bold text-black mb-1 w-fit">Sign in</p>
                <p className="text-sm text-black w-fit">
                    Still don't have an account? 
                    <Link className="underline underline-offset-1 ml-0.5 ease-linear transition-all hover:text-purple-1" to="signup">Create one!</Link>
                </p>
                <input type="email" className="border-b py-2 px-0.5 text-black font-medium mt-4 w-full" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                <input type="password" className="border-b py-2 px-0.5 text-black font-medium mt-4 w-full" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                <button className="submit mt-6 p-2 bg-black w-full rounded text-white font-medium">Submit</button>
            </form>
        </div>
        <img src={signInBg} alt="signin-bg" />
    </div>
    )
}

export default SignInPage