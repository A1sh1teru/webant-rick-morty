import Header from "../../components/header"
import Footer from "../../components/footer"
import LocationsFilterSection from '../../components/locations-filter-section'
import LocationsCardsSection from '../../components/locations-cards-section'

export default function Locations() {

    return(

        <>
        
            <header>

                <Header />

            </header>

            <main>

                <section>

                    <LocationsFilterSection />

                </section>

                <section>

                    <LocationsCardsSection />

                </section>

            </main>

            <footer>

                <Footer />

            </footer>

        </>

    )

}