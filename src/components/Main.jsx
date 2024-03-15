import { useState } from "react";


export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(0);

    return(
       <main>
         <input
         type="text"
         name="" id=""
         onChange={(event)=> setNome(event.target.value)}
         />
         {nome}

         <input
         type="number"
         name="" id=""
         onChange={(event)=> setTelefone(event.target.value)}
         />
         {telefone}
       </main>
    );
}