import Animal from "./Animal";

import { useState } from "react";



const AnimalList = () => {
    const [animals, setAnimals] = useState([
        { species: "mamel", name: "whale", birthday: new Date() },
        { species: "mamel", name: "elephant", birthday: new Date() },
        { species: "mamel", name: "lion" },
        { species: "bird", name: "owl", birthday: new Date() },
        { species: "bird", name: "eagel", birthday: new Date() },
    ]);

    const handleOnRemove = (index) => {
        setAnimals((prevValue) => prevValue.filter((animal, i) => i !== index));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Species</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {animals.map((animal, index) => (
                    <Animal
                        key={index}
                        animal={animal}
                        handleOnRemove={handleOnRemove}
                        index={index}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default AnimalList;