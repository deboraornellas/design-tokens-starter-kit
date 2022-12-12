import logo from "./weyweywebLogo.png";
import styles from "./App.module.css";
import { mockCardData } from "../data/mockData";
import Card from "../Card/Card";

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1 className={styles.appTitle}>Design Tokens Demo!</h1>
        <img className={styles.logo} src={logo} />
      </header>
      <main className={styles.main}>
        <h2>A list of some Pink Floyd Albums</h2>
        <div className={styles.cardContainer}>
          {mockCardData.map((card) => (
            <Card title={card.title} imgSrc={card.imgSrc} text={card.text} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
