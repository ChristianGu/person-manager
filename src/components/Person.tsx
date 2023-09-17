import React, { useState } from 'react';

interface PersonProps {
  onAddPerson: (person: PersonData) => void;
}

interface PersonData {
  firstName: string;
  lastName: string;
  driverLicense: File;
}

const Person: React.FC<PersonProps> = ({ onAddPerson }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [driverLicense, setDriverLicense] = useState<File | null>(null);

  const handleAddPerson = () => {
    if (!firstName || !lastName || !driverLicense) {
      alert('All fields are mandatory');
      return;
    }

    onAddPerson({ firstName, lastName, driverLicense });
    setFirstName('');
    setLastName('');
    setDriverLicense(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileType = file.type;
      if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
        alert('Only .jpg and .png files are allowed');
        return;
      }
      setDriverLicense(file);
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">Add Person</h2>
      <div className="mt-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mt-4">
        <input
          type="file"
          accept=".jpg, .png"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button onClick={handleAddPerson} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Add Person
      </button>
    </div>
  );
};

export default Person;

