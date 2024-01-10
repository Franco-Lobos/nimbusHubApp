
export default function AccesForm (setEmail, setPassword, email, password){


    return(
        <div>
            <div className="mb-8">
            <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md bg-themeWhite text-blue focus:outline-none focus:border-blue"
                placeholder="Email address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-8">
            <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md bg-themeWhite text-blue focus:outline-none focus:border-blue"
                placeholder="Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
        </div>
    )
}