import React, {useState, useEffect} from "react";

function App (){

  const [chamada, setChamada] = useState([

    "Carlos Eduardo",
    "Matheus Rodrigues",
    "Jorginho Vítor",
    "Marcos Rodrigues"
  ]);

  const[nome,setNome] = useState("Lista de Chamada");

  const[input,setInput] = useState("");

  useEffect(()=>{
  
  localStorage.setItem("Chamada", JSON.stringify(chamada));
  }, [chamada]);

  useEffect(() => {
  const chamadaStorage = localStorage.getItem("chamada");
  
    if (chamadaStorage){

      setChamada(JSON.parse(chamadaStorage));
    }
  },[])

  function handleAdd(){
    setChamada([...chamada, input]);
    setInput("");
  }

  return(
    <>
    <ul>

    <h1>{nome}</h1>

      {chamada.map((aluno)=>(<li key = {aluno}>{aluno}</li>))};

    </ul>

    <input
    type="text"
    value={input}
    onChange={(e)=> setInput(e.target.value)}/>
  )

  <button type onClick={handleAdd}>
    Adicionar
  </button>
  </>
  );

}

export default App;