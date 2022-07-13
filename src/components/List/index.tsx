import React, { useState } from "react";
import Item from "./Item";
import style from "./List.module.scss";

export default function List() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Class components",
      tempo: "03:00:00",
    },
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          console.log("h2 clicado", tarefas);
          setTarefas([
            ...tarefas,
            { tarefa: "Estudar estado", tempo: "00:30:00" },
          ]);
        }}
      >
        {" "}
        Estudos do dia{" "}
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
