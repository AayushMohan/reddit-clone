import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { type } from 'os'
import React from 'react'

type Props = {
  post: Post
}

const Post = ({ post }: Props) => {
  return (
    <div>
      {/* Votes */}
      <div>
        <ArrowUpIcon />
        <p>0</p>
        <ArrowDownIcon />
      </div>

      <div>
        {/* Header */}
        <div></div>

        {/* Body */}

        {/* Image */}

        {/* Footer */}
      </div>
    </div>
  )
}

export default Post
