import {useRouter} from 'next/router';

export default function post({ post }) {
  
  return (
    <div>
      <h1>Post:</h1>
      <p>
        {post.body}
      </p>
    </div>
  )
}

export async function getStaticProps ({ params }) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then(response => response.json());

  return {
    props: { post }
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map(post => ({
    params: { postId: post.id + '' }
  }))

  return { paths, fallback: false }
}
