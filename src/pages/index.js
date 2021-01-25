import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const IndexPage=()=>{
  return(
    <Layout>
    <Head title="Home"/>
      <h1>
        Hello
      </h1>
      <h2>
        I'm Piyush,aiming to be a full stack developer living in chhindwara :)
      </h2>
      <p>Need a developer <Link to="/contact">ContactMe</Link></p>
    </Layout>
  )
}
export default IndexPage;