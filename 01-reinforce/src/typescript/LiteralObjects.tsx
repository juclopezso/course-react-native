// type, class, interface
interface Person {
    name: string;
    age: number;
    address: Address
}

interface Address {
    country: string;
    house: number;
}

export const LiteralObjects = () => {

    const person: Person = {
        name: 'Juan',
        age: 26,
        address: {
            country: 'Colombia', 
            house: 218
        }
    }

    // person.lastName = 'Lopez' can't do this

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {/* replacer */}
                    { JSON.stringify(person, null, 2) }
                </pre>
            </code>
        </>
    )
}
