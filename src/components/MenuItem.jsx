import React from 'react';

const MenuItem = ({ item }) => {
    return (
        <div className="bg-white p-6 m-2 shadow-lg rounded-lg">
            <div className="flex justify-center mb-4">
                <img
                    src={process.env.PUBLIC_URL + '/' + item.image}
                    alt={item.name}
                    className="w-48 h-40 object-cover rounded-xl"
                />
            </div>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 pt-2">{item.description}</p>
            <p className="text-gray-900 pt-1">{item.sides}</p>
            <p className="text-green-600 pt-1 pb-1">R${item.price.toFixed(2)}</p>
            {item.available ? (
                <p className="text-green-600">Disponível</p>
            ) : (
                <p className="text-red-600">Indisponível</p>
            )}
        </div>
    );
};

export default MenuItem;