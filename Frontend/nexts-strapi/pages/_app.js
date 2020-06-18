import Header from "components/header"
import Head from "next/head"
function MyApp({ Component, pageProps }) {
    return(
        <>
        <Head>
          <title>My new cool app</title>
        </Head>
            <Header />
            <Component {...pageProps} /> 
        </>
    )
}
  export default MyApp