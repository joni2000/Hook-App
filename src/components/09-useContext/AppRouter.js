import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { MainApp } from './MainApp';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <div className='container'>
                <Routes>
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/about' element={<AboutScreen />} />
                    <Route path='/home' element={<HomeScreen />} />
                    <Route path='*' element={<MainApp />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}
