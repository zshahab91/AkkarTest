import { useAppSelector } from "@/store/store";
import { IProductState } from "@/interfaces/product";
import ProducList from "../products";
import Loading from "../loading";
import Link from "next/link";


const Header = () => {
    const cartList = useAppSelector((state: { product: IProductState }) => state.product.cart);
    return (
        <>
            <div className=" flex justify-self-end items-center cursor-pointer">
                <div className="relative py-2">
                    <div className="t-0 absolute left-3">
                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartList.length}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
                <div className="t-0 absolute right-20">
                    <Link href="/wishList">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white m-auto"
                            stroke="red"
                            strokeWidth="2"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                            <path stroke="red"
                                fill="red"
                                d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                        </svg>
                    </Link>

                </div>
            </div>
        </>)
};

export default Header;
