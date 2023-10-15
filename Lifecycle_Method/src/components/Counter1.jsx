import React, { useEffect } from 'react';

export default function Counter1({ number }) {
  // so here we use useEffect for all the main three lifecycles i.e. componentDidMount, componentDidUpdate, and componentWillUnmount.

  //componentDidMount
  //   useEffect(() => {
  //     console.log('component mounting.....');
  //   });

  //componentDidUpdate
  //   useEffect(() => {
  //     console.log('component updating.....');
  //   }, [number]);

  //componentWillUnmount
  useEffect(() => {
    // console.log('component updating.....');

    return () => {
      console.log('component unmounttted');
    };
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
}
