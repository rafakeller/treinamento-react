import { useState } from "react";

import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          
        </main>
      </div>
    </div>
  );
}

{
  /* //JSX => JS + XML (Sintaxe do HTML) */
}
