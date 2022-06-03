import { gql } from "@apollo/client";


export const ADD_SUBREDDIT = gql`
  query MyMutation($topic: String!) {
    insertSubreddit(topic: $topic) {
      id
      topic
      created_at
   }
 }
`