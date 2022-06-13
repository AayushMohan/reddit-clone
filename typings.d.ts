type Comments = {
 created_at: string
 id: number
 post_id: number
 text: string
 username: string
}

type Vote = {
 created_at: string
 id: number
 post_id: number
 upvote: boolean
 username: string
}

type Subreddit = {
 created_at: string
 id: number
 text: string
}

type Post = {
 body: string
 created_at: string
 id: number
 image: string
 subreddit_id: string
 title: string
 username: string
 votes: number
 comments: Comments[]
 subreddit: Subreddit[]
}