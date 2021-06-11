import Link from 'next/link';

const index = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <hr/>
      <Link href="/post/25">
        <a>post/25</a>
      </Link>
      <hr/>
      <Link href="/posts">
        <a>posts</a>
      </Link>
    </>
  )
}

export default index;
