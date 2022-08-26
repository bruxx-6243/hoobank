// Importation for styles
import styles from './style';

// Let's import all our components
import {Navbar, Hero, Stats ,Business, Billing, CardDeals, Testimonials, Clients, CTA, Footer  } from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">

    {/* Navigation  section*/}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <Navbar />
      </div>
    </div>

    {/* Hero section*/}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* Main section  */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeals />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
)

export default App