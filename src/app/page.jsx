import styles from "./page.module.scss";
import Header from "../components/header";
import CharactersFilterSection from "../components/characters-filter-section";
import CharactersCardsSection from "../components/characters-cards-section";
import Footer from "../components/footer";

export default function CharactersPage() {
  return (
    <>
    
      <header>
        
        <Header />
      
      </header>

      <main>

        <section>

          <CharactersFilterSection />

        </section>

        <section>

          <CharactersCardsSection />

        </section>

      </main>

      <footer>

        <Footer />

      </footer>

    </>
  );
}
