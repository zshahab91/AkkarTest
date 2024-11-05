"use client";
import Image from 'next/image';
import { IProduct, IProductState } from '@/interfaces/product';
import { deleteWishListProductstate } from '@/store/productSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

const Wishlist = () => {
    const dispatch = useAppDispatch();
    const wishListStore = useAppSelector((state: { product: IProductState }) => {
        return state.product.wishlist
    });
    const removeFromWishList = (product: IProduct) => {
        dispatch(deleteWishListProductstate(product));
    }
    return (
        <div>
            {wishListStore.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {wishListStore.map((product) => (
                            <div key={product.id} className="bg-slate-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={200}
                                    height={160}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors" onClick={()=>removeFromWishList(product)}>
                                       Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default Wishlist;
