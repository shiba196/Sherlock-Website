import styles from './style'
import { Navbar, Hero } from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
          <Navbar />
        </div>
      </div>


      <div className={'bg-primary ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Hero />
        </div>
      </div>

      <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          Gamers Blog
          Careers
          Cards
          Contact us
        </div>
      </div>
    </div>
);

export default App