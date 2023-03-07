import React from 'react';
import {
  Layout, ResourceHighlight,
  NewsLetter,
  ResourceList,
  Footer
} from '../../component';

// import { resources } from '../../api/data';


function Blog({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0,1)} />
      <NewsLetter />
      <ResourceList resources={resources.slice(1)} />
      <Footer />
    </Layout>
  );
}

// is called build time
// export async function getStaticProps() {

//   console.log("getStaticProps called");
//   try {
//     const resData = await fetch("http://0.0.0.0:3000/api/resources");
//     const data = await resData.json();
//     return {
//       props : {
//         resources: data
//       }
//     }
//   } catch (error) {
//     return {
//       props: {
//         resources: []
//       }
//     }
//   }
// }

// is called every time visit the time
export async function getServerSideProps() {
  console.log("getServerSideProps called");
  try {
    const resData = await fetch("http://0.0.0.0:3000/api/resources");
    const data = await resData.json();
    return {
      props : {
        resources: data
      }
    }
  } catch (error) {
    return {
      props: {
        resources: []
      }
    }
  }
}


export default Blog;