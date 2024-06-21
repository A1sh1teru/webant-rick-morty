import Header from "../../../../components/header"
import Footer from "../../../../components/footer"
import LocationsDetailsSection from "../../../../components/locations-details-section"

export default function LocationPage({ params }) {

    const { id } = params;

    return(

        <>
        
            <header>

                <Header />

            </header>

            <main>

                <section>

                    <LocationsDetailsSection id={id} />

                </section>

            </main>

            <footer>

                <Footer />

            </footer>
        
        </>

    )

}