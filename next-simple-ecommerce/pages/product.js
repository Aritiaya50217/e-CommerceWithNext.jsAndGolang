//function Product({id, title, price, description, category, image}){
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, title, price, rating, description, category, image, hasPrime,
        };
     
        dispatch(addToBasket(product))
    }

//    return ();