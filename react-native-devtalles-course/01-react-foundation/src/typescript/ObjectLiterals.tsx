interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
  country: string;
  houseNumber: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 48,
    firstName: "Isidro",
    lastName: "Lopez",
    address: {
      country: "Spain",
      houseNumber: 42
    }
  }

  return (
      <>
        <h3>Objetos literales</h3>
        <pre>
          {JSON.stringify(person, null, 2)}
        </pre>
      </>
  )
}