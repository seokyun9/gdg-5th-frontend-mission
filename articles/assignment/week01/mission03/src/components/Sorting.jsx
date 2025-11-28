import React, { useState } from 'react';
import Product from "./Product";
import { sortedData } from "../data/mockData.js";

const Sorting = ({ product, addToCart }) => {
    const [sorting, setSorting] = useState("")
    const [products, setProducts] = useState(sortedData);

    const handleSortChange = (e) => {
        const newVal = e.target.value //e.target.value에서 선택된 새 값을 가져와야함
        setSorting(newVal)
    }

    return (
        <div>
            <div className="top-[60px] w-full flex justify-center h-full">
                <div className="w-[652px]">
                    <div className="flex justify-center items-center gap-2 mb-8 py-12">
                        <div className="space-y-4">
                            <select id="d" name="카테고리"
                                className="w-64 px-4 py-3 border border-gray-300 bg-gray-100 rounded-md text-sm
                     focus:ring-gray-500"
                                onChange={handleSortChange}
                                value={sorting} // select의 현 값을 React state와 연결 (?)
                            >
                                <option value="" default disabled hidden > 정렬기준 선택</option>
                                <option value="이름"> 이름 </option>
                                <option value="가격"> 가격 </option>
                            </select>

                            <div value={sortedData}>
                                {products.map((item) => (
                                    <Product key={item.id} product={item} addToCart={addToCart} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sorting;
