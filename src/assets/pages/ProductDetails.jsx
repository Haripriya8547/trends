import { useParams } from "react-router-dom";

function ProductDetails({products}){

    const {id} = useParams(); 

const product  = products.find((pr)=>pr.id === Number(id))

console.log("id----->",id);

    return (
        <h1>Product Details</h1>
    )
}
export default ProductDetails;