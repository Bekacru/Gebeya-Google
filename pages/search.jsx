
import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/header"
import SearchResults from "../components/SearchResults"


function Search({ results, term }) {
    console.log(results)
    const router = useRouter()
    return (
        <div className=" ">
            <Head>
                <title>{router.query.term} - Gebeay Search</title>
            </Head>


            {/* Header */}
            <Header />

            {/* Search Results */}
            <SearchResults results={results} term={term} />
        </div>
    )
}
export default Search

export async function getServerSideProps(context) {
    const startIndex = context.query.startIndex || 0
    const term = context.query.term || ""
    const data = await fetch(`http://127.0.0.1:8000/api/products/?s=${context.query.term}`).then(res => res.json());
    return {
        props: {
            results: data,
            term: term
        }
    }
}