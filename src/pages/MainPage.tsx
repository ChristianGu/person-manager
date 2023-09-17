import React, { useState } from 'react';
import Person from '../components/Person';

interface PersonData {
  firstName: string;
  lastName: string;
  driverLicense: File;
}

const MainPage: React.FC = () => {
  const [persons, setPersons] = useState<PersonData[]>([]);

  const handleAddPerson = (person: PersonData) => {
    setPersons([...persons, person]);
  };

  const handleRemovePerson = (index: number) => {
    const newPersons = [...persons];
    newPersons.splice(index, 1);
    setPersons(newPersons);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Person Manager</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Person onAddPerson={handleAddPerson} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Persons List</h2>
          <ul>
            {persons.map((person, index) => (
              <li key={index} className="mb-4">
                <div>
                  <span className="font-semibold">{person.firstName} {person.lastName}</span>
                  <button onClick={() => handleRemovePerson(index)} className="ml-4 text-red-600">
                    Remove
                  </button>
                </div>
                <div>
                  <span>Driver License: {person.driverLicense.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
