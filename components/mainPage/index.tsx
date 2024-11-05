import { useAppSelector } from "@/store/store";
import { IProductState } from "@/interfaces/product";
import ProducList from "../products";
import Loading from "../loading";


const MainPage = () => {
    const loading = useAppSelector((state: { product: IProductState }) => state.product.loading);
    return (!loading ?<ProducList />: <Loading />)
};

export default MainPage;
