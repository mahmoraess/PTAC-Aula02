import { useState } from "react";


export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(0);
    const [cpf, setCpf] = useState(0);
    const [listaContatos, setListaContatos] = useState([]);

    const registrar = (event) =>{
     event.preventDefault(); 
     alert("salvo");
     setListaContatos([...listaContatos,
      {
        nomeSalvo: nome,
        telefoneSalvo: telefone,
        cpfSalvo: cpf,
      }
    ]);
    };
    console.table(listaContatos)

    return(
       <main>
        <form action="" onSubmit={registrar}>
          <label htmlFor="nome">Nome:</label>
         <input
         type="text"
         name="" id=""
         onChange={(event)=> setNome(event.target.value)}
         />
         {nome}

         <label htmlFor="telefone">telefone:</label>
         <input
         type="number"
         name="" id=""
         onChange={(event)=> setTelefone(event.target.value)}
         />
         {telefone}

         <label htmlFor="cpf">cpf:</label>
         <input
         type="number"
         name="" id=""
         onChange={(event)=> setCpf(event.target.value)}
         />
         {cpf}

         <button>Salvar</button>
         </form>
       </main>
    );
}