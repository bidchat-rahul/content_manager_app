import React from 'react';
import {
  Layout, ResourceHighlight,
  NewsLetter,
  ResourceList,
  Footer
} from '../../component';

import { resources } from '../../api/data';


function Blog() {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0,1)} />
      <NewsLetter />
      <ResourceList resources={resources.slice(1)} />
      <Footer />
    </Layout>
  );
}

export default Blog;