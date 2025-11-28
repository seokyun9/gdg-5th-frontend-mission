import { useState, useEffect } from 'react';
import gdgLogoImg from '../assets/gdg_logo.svg'
import { useNavigate } from 'react'

function Navbar({changePage, currentPage}) {

    const activeClass = "text-blue-500 font-bold";
    const defaultClass = "text-[#848F92]";

    return (
        <div className='fixed flex h-[60px] w-full items-center justify-around border-b border-[#D2D2D2] bg-white'>
            <div className='w-20'>
                <img className = "pointer-events-none" src={gdgLogoImg} alt="logoImg" />
            </div>
            <div className="flex items-center justify-center flex-row gap-[22px] text-[#848F92]">
                <div onClick={() => changePage('category')}>
                    <button className= {`hover:cursor-pointer ${currentPage === 'category' ? activeClass : defaultClass}`}>
                    카테고리 필터링
                    </button>
                </div>
                <div onClick={() => changePage('price')}>
                    <button className={`hover:cursor-pointer ${currentPage === 'price' ? activeClass : defaultClass}`}>
                    가격 필터링  
                    </button>
                </div>
                <div onClick={() => changePage('sorting')}>
                    <button className=  {`hover:cursor-pointer ${currentPage === 'sorting' ? activeClass : defaultClass}`}>
                    상품 정렬
                    </button>
                </div>
            </div>  
            <div>
                <button  className="rounded-lg border border-blue-500 p-1.5 text-[16px] text-blue-500 hover:cursor-pointer" 
                onClick={() => console.log("관리자 페이지 클릭")}>
                    관리자
                </button>
            </div>
        </div>
    )
}

export default Navbar