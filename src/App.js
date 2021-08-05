import React, {useState, useEffect, useCallback, useMemo} from "react";

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

    const handleAdd = useCallback(()=>{
    setChamada([...chamada, input]);
    setInput("");
  },[input,chamada]);

  const totalChamadas = useMemo(() => chamada.length,[chamada]);

  return(
    <>
    <ul>

    <h1>{nome}</h1>

      {chamada.map((aluno)=>(<li key = {aluno}>{aluno}</li>))};

    </ul>
    <br/>

    <strong>Você tem {totalChamadas} alunos </strong>

    <input
    type="text"
    value={input}
    onChange={(e)=> setInput(e.target.value)}/>
  

    <button type onClick={handleAdd}>
      Adicionar
    </button>
    </>

  );
  
  

}

export default App;