import Header from '../../../components/header'
import Footer from "../../../components/footer";
import CharactersDetailsSection from "../../../components/characters-details-section";

export default function CharacterPage({ params }) {

    const { id } = params;

    return(

        <>
        
            <header>

                <Header />

            </header>

            <main>

                <CharactersDetailsSection id={id} />

            </main>

            <footer>

                <Footer />

            </footer>
        
        </>

    )

}