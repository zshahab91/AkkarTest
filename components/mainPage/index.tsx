import { useAppSelector } from "@/store/store";
import { IProductState } from "@/interfaces/product";
import ProducList from "../products";
import Loading from "../loading";
import Header from "../header";


const MainPage = () => {
    const loading = useAppSelector((state: { product: IProductState }) => state.product.loading);
    return (<>
        {!loading ?
            <>
                <Header />
                <ProducList />
            </>
            : <Loading />}

    </>)
};

export default MainPage;
