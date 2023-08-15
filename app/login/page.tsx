"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/components/contexts/authContext";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";


export default function page() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { login } = useAuthContext();
  
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
      
      const response = await fetch(
        "https://librarify.latteandfront.es/api/login_check",
        {
          method: "POST",
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      );
   
  
      if (!response.ok) {
       
        const tokens = await response.json();
      login(tokens);
     
      return router.push("/admin");
      }
  
      return console.log("Error");
    };
    return (
      <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
        <div className="40-w p-5 rounded bg-white">
          
          <form onSubmit={handleSubmit} className="form">
            <h3 className="text-center">Ingresa JYSDev</h3>

            <div className="mb-2">
            <label htmlFor="email">
               Correo Electronico
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                placeholder="ejemplo@mail.com"
                className="form-control"
              />
            </label>
            </div>
            
            <div className="mb-2">
            <label htmlFor="password">
              Contraseña
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                className="form-control"
              />
            </label>
            </div>
            
           
            <Button type="submit" variant="contained" endIcon={<Send/>}>Ingresar</Button>
          </form>

        </div>
      </div>
    );
  
}
