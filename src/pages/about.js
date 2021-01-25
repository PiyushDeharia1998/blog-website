import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout";
import Head from "../components/head"
const AboutPage=()=>{
    return (
            <Layout>
            <Head title="About"/>
            <h1>Title</h1>
            <p>Bio</p> 
            <Link to="/contact">ContactMe</Link>
            </Layout>
    )
}
export default AboutPage;