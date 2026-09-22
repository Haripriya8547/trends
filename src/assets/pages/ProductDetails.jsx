
import { useParams } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { addToCart } from "../../redux/productSlice";

import "./ProductDetails.css";

function ProductDetails({ products = [] }) {

    const { id } = useParams();
    const dispatch = useDispatch();

    const product = products.find(
        (p) => String(p.id) === String(id)
    );

    const handleAddToCart = () => {

        if (!product) return;

        dispatch(
            addToCart({
                ...product,
                quantity: 1
            })
        );

        toast.success("Product added to cart!");
    };

    if (!product) {
        return (
            <h4 className="text-center mt-4">
                Invalid Product ID
            </h4>
        );
    }

    return (
        <div className="product-details-wrapper">

         
            <div className="product-image-container">
                <Image
                    src={
                        product.productImage ||
                        product.productImage
                    }
                    alt={product.productName}
                    className="product-details-image"
                />
            </div>

          
            <div className="product-details shadow-lg">

                <h2>{product.productName}</h2>

                <p className="product-description">
                    {product.productDiscripption}
                </p>

                <p className="product-price">
                    Price: {product.productPrice}
                </p>

                <Button
                    className="add-cart-btn"
                    onClick={handleAddToCart}
                >
                    Add Cart
                </Button>

            </div>

        </div>
    );
}

export default ProductDetails;