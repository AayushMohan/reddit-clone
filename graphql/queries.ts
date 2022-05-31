import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation MyMutation(
    $body: String!
    $image: String!
    $subreddit: String!
    $title: String!
    $username: String!
  ){
    insertPost(
      body: $body
      image: $image
      subreddit: $subreddit
      title: $title
      username: $username 
    ){
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`