import { Layout } from '../../component';

function MyTest(props) {
  return (
    <>
      <h1>the Test</h1>
      {props.children}
    </>
  )
}

function About() {
  return (
    <Layout>
      <div>About Us</div>
      <MyTest>
        <div>div 1</div>
        <div>div 2</div>
      </MyTest>
    </Layout>


  )
}

export default About;
