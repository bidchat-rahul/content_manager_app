import React from "react";

function CompA(){
  return <h1>CompA </h1>
}

function CompB(){
  return <h1>CompB</h1>
}

class CompC extends React.Component {
  render() {
    return <h1>COmp C</h1>
  }
}

const CompD = _ => (
  <h3>arrow func</h3>
) 

function HomePage() {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <CompA/>
      <CompB />
      <CompC />
      <CompD />
    </>

  )
}

export default HomePage;
