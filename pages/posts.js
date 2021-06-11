import Link from 'next/link';

const Posts = ({posts}) => {
  return (
    <>
      {posts.map(({id, title}) => (
        <div key={id}>
          <Link href={`/post/${id}`}>
            <a>
              <h2>{title}</h2>
            </a>
          </Link>
          <hr/>
        </div>
      ))}
    </>
  );
};

export async function getStaticProps () {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
  
  return {
    props: {posts}
  }
}

export default Posts;
