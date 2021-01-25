import { format } from "prettier"
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"

export const query= graphql`
  query($slug:String){
    contentfulBlogPost(slug:{eq: $slug}){
      title
      publishedDate(fromNow:true)
      body{
        body
      }
      images{
        file{
          url
        }
      }
    }
      
  }
`

const Blog = (props) => {

    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          <p>{props.data.contentfulBlogPost.body.body}</p>
          <img src={props.data.contentfulBlogPost.images.file.url}></img>
        </Layout>
    )
}

export default Blog;