import  { useState } from "react";

export default function SighUpForm () {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(hasNumbers(passowrd));
        if (username.length < 8) {
            setError("username has to have atleast 8 characters");
        } else if (password.length < 8 || !hasNumbers(password)) {
            setError("password has to have atleast 8 charcters and atleast one number ");
        } else {
            setError("SignUp successful!");
        }
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                username: username, 
                password: password, 
            }),

        });
    
            const result = await response.json();
            setToken(result.token);
            console.log(result);
            
        } catch (error) {
            setError(error.message);
        }
    }

    return (
    <>
          <h2>Sign Up!</h2>;
         {error && <p> {error} </p>}
        <form onSubmit={handleSubmit} >
             <label>
                Username:
               <input value={username} 
               onChange={(e) => setUsername(e.target.value)} />
             </label>

             <label>
                 Password:
                 <input 
                 type="password" 
                 value={password} 
                onChange={(e) => setpassword(e.target.value)} />
                 </label>

              <label>
             <button type="submit">Submit</button>
             </label>
         </form>
         </>
    )
}
