import logo from "./weyweywebLogo.png";
import malaga from "./malaga.jpeg";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <header className={styles["App-header"]}>
        <h1 className={styles["app-title"]}>Design Tokens Demo!</h1>
        <img className={styles.logo} src={logo} />
      </header>
      <main>
        Hi
        <img className={styles["main-picture"]} src={malaga} />
      </main>
    </div>
  );
}

export default App;
