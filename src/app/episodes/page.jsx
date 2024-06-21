import Header from '../../components/header'
import Footer from '../../components/footer'
import EpisodesCardsSection from '../../components/episodes-cards-section'
import EpisodesFilterSection from '../../components/episodes-filter-section'

export default function EpisodesPage() {

    return(

        <>
        
            <header>

                <Header />

            </header>

            <main>

                <section>

                    <EpisodesFilterSection />

                </section>

                <section>

                    <EpisodesCardsSection />

                </section>

            </main>

            <footer>

                <Footer />

            </footer>

        </>

    )

}