const Footer = () => {
    
    return(
        <div className="fixed bottom-10 w-full flex items-center justify-center"> 
            <button 
            className="flex justify-center w-[652px] rounded-lg border-2 border-[#008CFF] bg-white px-4 py-3 text-[#008CFF] hover:cursor-pointer"
            onClick={() => console.log("장바구니 구매하기")}>
                장바구니 구매하기        
            </button>
        </div>

    );
}

export default Footer;