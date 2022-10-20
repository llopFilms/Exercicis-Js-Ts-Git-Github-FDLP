import React from 'react';

const Select = ({ nom, siCanvia }) => {

  console.log(nom);
  const handleChange = ({target}) => {
    const newNameS = target.value;
    console.log(newNameS);
    siCanvia(newNameS);
    return newNameS;
}

  return (
    <div>
      <h4>Hey my name is {nom}</h4>
      <select id="great-names" onChange={handleChange}>
        <optgroup label="Great Names">
          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </optgroup>
      </select>
    </div>
  );
}

export default Select;
