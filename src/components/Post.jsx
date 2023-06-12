import { Comment } from "./Comment.jsx";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/101514463?v=4" />
          <div className={styles.authorInfo}>
            <strong>Rafaela Keller</strong>
            <span>Web Developer Trainne</span>
          </div>
        </div>

        <time title="11 de Maio ás 8:13" dateTime="2022-05-11">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Acabei de subir mais um projeto no meu portifólio. É um projeto que
          fiz em React Js, com
        </p>
        <p>base no curso da Rocketseat. O nome do projeto é Ignite</p>
        <p>
          {" "}
          <a href="">github.com/rafakeller</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#react</a> <a href="">#CVP</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm} action="">
        <strong>Deixe seu feedback</strong>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit"> Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
