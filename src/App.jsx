import { useState } from "react";
import { Post } from "./Post.jsx";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Post
        author="Diego Santos"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet unde, optio recusandae corrupti, doloremque commodi quibusdam dolor vitae sunt, laborum libero labore aut! Maxime est illum laboriosam, unde blanditiis at?"
      />

      <Post
        author="Rafaela Kubert Santos"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet unde, optio recusandae corrupti, doloremque commodi quibusdam dolor vitae sunt, laborum libero labore aut! Maxime est illum laboriosam, unde blanditiis at?"
      />
    </div>
  );
}

//JSX => JS + XML (Sintaxe do HTML)
