import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export default function Content({ card, setCard,setAlbumVisible, setAlbumImage }) {

    const [selectedImage, setSelectedImage] = useState("1");

    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            return false;
        }
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleCard = async () => {
        const targetProduct = await card.filter((prod) => prod.name === "Fall Limited Edition Sneakers");
        if (targetProduct.length === 1) {
            targetProduct[0].count = targetProduct[0].count + count;
            setCard([targetProduct[0]]);
        } else {
            setCard([...card, { name: "Fall Limited Edition Sneakers", price: 125, count: count, image:"1" }])
        }
    }

    const handleAlbum = () => {
        setAlbumImage(selectedImage);
        setAlbumVisible(true);
    }

   

    return (
        <div className='container py-16 px-16 grid md:grid-cols-2 gap-8 '>
            <div className=' flex flex-col justify-center items-center gap-8'>
                <div className='flex flex-col gap-6'>
                    <img onClick={() => handleAlbum()} className='rounded-lg cursor-pointer hover:border hover:border-orange hover:opacity-60 md:w-96 md:h-96' src={require(`../images/image-product-${selectedImage}.jpg`)} alt="image-1" />
                    <div className='w-full flex justify-between items-center'>
                        <img onClick={() => setSelectedImage("1")} className={`rounded-lg cursor-pointer ${selectedImage === "1" ? 'border-2 border-orange opacity-40' : 'hover:border-2 hover:border-orange hover:opacity-40'} w-12 h-12 sm:w-16 sm:h-16`} src={require("../images/image-product-1-thumbnail.jpg")} alt="image-1" />
                        <img onClick={() => setSelectedImage("2")} className={`rounded-lg cursor-pointer ${selectedImage === "2" ? 'border-2 border-orange opacity-40' : 'hover:border-2 hover:border-orange hover:opacity-40'} w-12 h-12 sm:w-16 sm:h-16`} src={require("../images/image-product-2-thumbnail.jpg")} alt="image-2" />
                        <img onClick={() => setSelectedImage("3")} className={`rounded-lg cursor-pointer ${selectedImage === "3" ? 'border-2 border-orange opacity-40' : 'hover:border-2 hover:border-orange hover:opacity-40'} w-12 h-12 sm:w-16 sm:h-16`} src={require("../images/image-product-3-thumbnail.jpg")} alt="image-3" />
                        <img onClick={() => setSelectedImage("4")} className={`rounded-lg cursor-pointer ${selectedImage === "4" ? 'border-2 border-orange opacity-40' : 'hover:border-2 hover:border-orange hover:opacity-40'} w-12 h-12 sm:w-16 sm:h-16`} src={require("../images/image-product-4-thumbnail.jpg")} alt="image-4" />
                    </div>
                </div>
            </div>
            <div className=' flex flex-col justify-center gap-8'>
                <h4 className='text-sm text-orange font-bold'>SNEAKER COMPANY</h4>
                <h1 className='text-3xl text-black font-bold'>Fall Limited Edition Sneakers</h1>
                <p className='text-sm text-black text-opacity-70'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className='flex gap-2 flex-col'>
                    <div className='text-2xl flex items-center gap-4'>$125.00 <span className='text-orange font-bold p-1 rounded-lg bg-paleOrange text-xs'>50%</span></div>
                    <div className='text-xs text-grayishBlue font-bold'>$250.000</div>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <div className='flex items-center justify-between w-full md:w-28 gap-4'>
                        <AiOutlineMinus onClick={handleDecrement} className='h-8 text-orange font-bold cursor-pointer' />
                        <small onChange={(e) => setCount(e.target.value)} className='text-sm font-bold text-black flex-1 text-center '>{count}</small>
                        <AiOutlinePlus onClick={handleIncrement} className='h-8 text-orange font-bold cursor-pointer' />
                    </div>
                    <button onClick={handleCard} className='flex justify-center text-white items-center gap-2 text-xs bg-orange hover:bg-opacity-70 w-full md:w-52 rounded-xl h-10'>
                        <svg className='scale-75' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path className='fill-white' d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero" /></svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
