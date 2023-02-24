import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default function Album({ albumImage, setAlbumImage, setAlbumVisible, albumVisible }) {


    const handleNext = () => {
        if (albumImage === "4") {
            setAlbumImage("1")
        }
        else {
            const next = Number(albumImage) + 1;
            setAlbumImage(`${next}`);
        }
    }

    const handlePrev = () => {
        if (albumImage === "1") {
            setAlbumImage("4")
        }
        else {
            const next = Number(albumImage) - 1;
            setAlbumImage(`${next}`);
        }
    }

    return (
        <>
            {albumVisible === true &&
                <div className="fixed bottom-0 inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center" style={{ zIndex: "2" }}>
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-black opacity-75"></div>
                    </div>

                    <div className='z-30 flex flex-col gap-4 justify-center items-center'>
                        <div className='flex justify-end items-center w-full text-3xl cursor-pointer font-bold text-orange'>
                            <RxCross2 onClick={() => setAlbumVisible(false)} />
                        </div>
                        <div className='flex items-center w-full'>
                            <div onClick={handlePrev} className='relative flex items-center justify-center bg-white h-8 w-8 md:w-12 md:h-12 rounded-full cursor-pointer -right-4 md:-right-6'><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg></div>
                            <img className=' w-64 h-64 sm:w-96 sm:h-96 rounded-xl' src={require(`../images/image-product-${albumImage}.jpg`)} alt="product" />
                            <div onClick={handleNext} className='relative flex items-center justify-center bg-white h-8 w-8 md:h-12 md:w-12 rounded-full cursor-pointer -left-4 md:-left-6'><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg></div>
                        </div>
                        <div className='w-full flex items-center justify-between gap-2 px-6'>
                            <img onClick={() => setAlbumImage("1")} className={`${albumImage === "1" ? 'opacity-70 border-2 border-orange' : 'hover:opacity-70 hover:border-2 hover:border-orange cursor-pointer'} w-16 h-16 rounded-xl`} src={require(`../images/image-product-1.jpg`)} alt="product" />
                            <img onClick={() => setAlbumImage("2")} className={`${albumImage === "2" ? 'opacity-70 border-2 border-orange' : 'hover:opacity-70 hover:border-2 hover:border-orange cursor-pointer'} w-16 h-16 rounded-xl`} src={require(`../images/image-product-2.jpg`)} alt="product" />
                            <img onClick={() => setAlbumImage("3")} className={`${albumImage === "3" ? 'opacity-70 border-2 border-orange' : 'hover:opacity-70 hover:border-2 hover:border-orange cursor-pointer'} w-16 h-16 rounded-xl`} src={require(`../images/image-product-3.jpg`)} alt="product" />
                            <img onClick={() => setAlbumImage("4")} className={`${albumImage === "4" ? 'opacity-70 border-2 border-orange' : 'hover:opacity-70 hover:border-2 hover:border-orange cursor-pointer'} w-16 h-16 rounded-xl`} src={require(`../images/image-product-4.jpg`)} alt="product" />
                        </div>
                    </div>


                </div>
            }
        </>
    )
}
