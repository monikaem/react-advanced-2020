import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
      const newData = data.filter(item => item.id !== id)
      setPeople(newData);
  }
  return (
      <>
          {people.map(person => {
              const {id, name} = person;
              return (
                  <div key={id} className="item">
                  <h4>{name}</h4>
                      <button className="btn" onClick={() => removeItem(id)}>Remove Item</button>
              </div>
              );
          })}
          <button className="btn" onClick={() => setPeople([])}>Clear People</button>
      </>
  );
};

export default UseStateArray;
