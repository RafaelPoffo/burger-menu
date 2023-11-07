import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center p-4 w-screen'>
                <img
                    src={process.env.PUBLIC_URL + '/images/burger-logo.PNG'}
                    alt="burguer Logo"
                    className='w-52 h-42'
                />
                <h1 className='p-2 text-3xl text-center'>
                    O melhor <span className='text-customOrange font-bold'> Hambúrguer </span> de São Paulo!
                </h1>
            </div>

            {/* Menu ícone que aciona o menu flutuante */}
            <div className='menu-icon cursor-pointer w-12 h-12 bg-customOrange border-4 shadow-inner rounded-xl ml-4 ' onClick={toggleMenu}>
                <img src={process.env.PUBLIC_URL + '/images/menu.svg'} alt="Menu" />
            </div>

            {/* Renderize o menu flutuante condicionalmente com base no estado */}
            {menuVisible && (
                <div className='floating-menu absolute ml-[5rem] mt-[-3rem] bg-white border shadow-2xl border-gray-300 p-4 rounded-xl'>
                    <div className='flex flex-col justify-center items-center gap-1 p-1 text-lg'>
                        <Link to="/hamburguers" className='cursor-pointer hover:text-customOrange hover:underline transition duration-300'>
                            Hambúrgueres
                        </Link>
                        <Link to="/acompanhamentos" className='cursor-pointer hover:text-customOrange hover:underline transition duration-300'>
                            Acompanhamentos
                        </Link>
                        <Link to="/sobremesas" className='cursor-pointer  hover:text-customOrange hover:underline transition duration-300'>
                            Sobremesas
                        </Link>
                        <Link to="/bebidas" className='cursor-pointer hover:text-customOrange hover:underline transition duration-300'>
                            Bebidas
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
