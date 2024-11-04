import Image from 'next/image';
import { IProduct, IProductState } from '@/interfaces/product';
import { deleteWishListProductstate } from '@/store/productSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

const Wishlist:React.FC = () => {
    const dispatch = useAppDispatch();
    const wishList = useAppSelector((state: { product: IProductState }) => state.product.wishlist);
    const removeFromWishList = (product: IProduct) => {
        dispatch(deleteWishListProductstate(product));
    }

    return (
        <div>
            <h1>My Wishlist</h1>
            {wishList.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishList.map(item => (
                        <li key={item.id}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={56}
                            />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <button onClick={() => removeFromWishList(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;
