import React from 'react';
import logo from '../../images/Снимок экрана 2021-09-21 в 17.21.21.png'
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <aside className='aside'>
            <div>
                <img src={logo} alt=""/>
                <div className='nav-bar flex flex-col	mt-6'>
                    <NavLink to='/task' className='text-white flex items-center	 pl-4 mb-2 tran p-2'>
                        <i className='bx bx-grid-alt mr-2'></i>
                        Задачи и работы
                    </NavLink>
                    <NavLink to='/project' className='text-white flex items-center pl-4 mb-2 tran p-2'>
                        <i className='bx bx-grid-alt mr-2'></i>
                        Проекты
                    </NavLink>
                    <NavLink to='/data' className='text-white flex items-center pl-4 mb-2 tran p-2'>
                        <i className='bx bx-grid-alt mr-2'></i>
                        Календарь
                    </NavLink>
                    <NavLink to='/possibilities' className='text-white flex items-center pl-4 mb-2 tran p-2'>
                        <i className='bx bx-grid-alt mr-2'></i>
                        Возможности
                    </NavLink>
                </div>
            </div>

        </aside>
    );
};

export default Aside;