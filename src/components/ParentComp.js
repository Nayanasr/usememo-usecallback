import React, { useCallback, useState } from 'react'
import ButtonComponent from './ButtonComponent';
import ClasspureComponent from './ClasspureComponent';
import DataCount from './DataCount';
import Title from './Title';

const ParentComp = () => {
    const [age, setAge] = useState(10);
    const [salary, setSalary] = useState(10000);

    //usecallback returns the memoised function
    
    const incrementAge = useCallback (() => {
        setAge(age + 5);
    }, [age]);

    const incrementSalary = useCallback (() => {
        setSalary(salary + 1000);
    }, [salary]);

   return (
    <div>
        <Title />

        <ClasspureComponent />

        <DataCount count={age} text="age" />

        <ButtonComponent handleClick={incrementAge}>
            Increment Age
        </ButtonComponent>

        <DataCount count={salary} text="Salary" />

        <ButtonComponent handleClick={incrementSalary}>
            Increment Salary
        </ButtonComponent>

    </div>
  );
};

export default ParentComp;