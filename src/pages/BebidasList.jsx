import React from 'react';
import menuData from '../menu.json';

const BebidasList = () => {
    const bebidas = menuData.filter(item => item.type === "bebida");

    return (
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bebidas.map(item => (
                <div className="bg-white p-6 m-2 shadow-lg rounded-lg" key={item.id}>
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
            ))}
        </div>
    );
}

export default BebidasList;
