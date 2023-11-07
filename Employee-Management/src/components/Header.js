import React from 'react';

const Header = () => {
    return (
        <div className="bg-orange-500 p-4 text-white flex justify-between items-center">
            <h1 className="text-xl pl-60">PIM</h1>
            <div className="flex items-center">
                <span className="mr-2">Shubham Shire</span>
                <div className="bg-white rounded-full p-2">
                    <img src="/path_to_your_user_icon.jpg" alt="User" className="w-8 h-8 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Header;
