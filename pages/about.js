import Router from 'next/router';

const About = () => {
  
  const goHome = () => {
    Router.push('/')
  }
  
  const goPost = () => {
    Router.push('/post/25')
  }
  
  return (
    <>
      <h1>About</h1>
      <button
        type={'button'}
        onClick={goHome}
      >
        Go home
      </button>
      <button
        type={'button'}
        onClick={goPost}
      >
        Go post 25
      </button>
    </>
  );
};

export default About;
