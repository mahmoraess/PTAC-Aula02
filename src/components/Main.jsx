import { useState } from "react";


export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(0);
    const [cpf, setCpf] = useState(0);
    const [listaContatos, setListaContatos] = useState([]);

    const registrar = (event) =>{
     event.preventDefault(); 
     setListaContatos([...listaContatos,
      {
        nomeSalvo: nome,
        telefoneSalvo: telefone,
        cpfSalvo: cpf,
      }]);
    };

    const remover = (index) => { // Cria a funcao remover e coloca nela um parametro, que poderia ser qualquer coisa, esssa funcao recebera um numero (um indice)
      let novaLista = listaTelefone.filter((el, indice) => (index != indice)) // Cria uma nova lista usando o filter removendo o elemento do indice passado no parametro, usamos dois parametros no filter, pq o primeiro e o elemento e o segundo o indice
      setListaContatos(novaLista) // Setamos a nova lista, caso nao fizessemos isso, apenas iria remover o elemento mas nao apresentar ele removido
    }

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
         <br/>

         <label htmlFor="telefone">telefone:</label>
         <input
         type="text"
         name="" id=""
         onChange={(event)=> setTelefone(event.target.value)}
         />
         {telefone}
         <br/>

         <label htmlFor="cpf">cpf:</label>
         <input
         type="text"
         name="" id=""
         onChange={(event)=> setCpf(event.target.value)}
         />
         {cpf}
         <br/>

         <button>Salvar</button>
         </form>
         {listaContatos.map((contato, index)=> 
         <div key={index} className="listaContatos">
             <p>{contato.nomeSalvo}</p>
             <p>{contato.telefoneSalvo}</p>
             <p>{contato.cpfSalvo}</p>
             <button onClick={function () {
          remover(index) // Crio um botao com uma funcao fantasma, que chama minha funcao com o parametro indice, esse botao e o que aparece como remover, precisa da funcao fantasma para passar um parametro
        }
      }>Remover</button>
      </div>)}
    </main>
  )
}