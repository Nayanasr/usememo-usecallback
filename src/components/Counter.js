import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1);
    };

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1);
    };

    //usememo hook will return the memoised value, it will executed only when
    //the dependency is changed else it will return the memoised value


    const isEven = useMemo(() => {
        console.log("isEven is executed");

        let i = 0;
        while (i < 1000000000) {
            i++;
        }
        return counterTwo % 2 === 0;
    }, [counterTwo]);

  return (
    <div>
        <h1>Counter One {counterOne}</h1>
        <h1>Counter Two {counterTwo}</h1>
        <span>{isEven ? "even" : "odd"}</span>
        <button onClick={incrementCounterOne}>Increment Counter One</button>
        <button onClick={incrementCounterTwo}>Increment Counter Two</button>
    </div>
  )
}

export default Counter