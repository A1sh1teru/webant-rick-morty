import Header from '../../../../components/header'
import Footer from '../../../../components/footer'
import EpisodesDetailsSection from '../../../../components/episodes-details-section'

export default function EpisodePage({ params }) {

    const { id } = params;

    return(

        <>
        
            <header>

                <Header />

            </header>

            <main>

                <EpisodesDetailsSection id={id} />

            </main>

            <footer>

                <Footer />

            </footer>

        </>

    )

}