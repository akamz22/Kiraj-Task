import React from 'react'
import Appstore from './assets/Appstore.png'
import playstore from './assets/playstore.png'
const Footer = () => {
    return (
        <footer
            class="sticky md:flex justify-center md:justify-between px-20 py-10 md:h-60 items-center bg-gray-400 w-full"
        >
            <div>
                <div class="text-2xl">Download Our App</div>
                <div>Download App for Android and IOS mobile Phone</div>
                <div class="">
                    <img
                        class="h-12 w-32"
                        src={Appstore}
                        alt=""
                    />
                    <img
                        class="h-12 w-32 mt-2"
                        src={playstore}
                        alt=""
                    />
                </div>
            </div>
            <div>
                <div class="w-80 mr-20">
                    Our Purpose is to Sustainably Make the Pleasure and Benefits of
                    Clothes Accessible to the Many
                </div>
                <div class="font-bold">Copyrights 2022 © Ashwini</div>
            </div>
            <div>
                <div class="text-2xl font-bold py-2">Follow Us</div>
                <div>Instagram</div>
                <div>Youtube</div>
                <div>faceboob</div>
                <div>
                    <div><i class="fa-brands fa-x-twitter"></i></div>
                    X-Twitter
                </div>
            </div>
        </footer>
    )
}

export default Footer