import { Link, useParams } from "react-router-dom";
import products from "./productsData";

function Codes() {
    
    const { productId } = useParams();
    console.log({ productId });
    
    const product = products.find((product) => product.id == productId);
    console.log(product);
    const { name, img, description, date, category} = product;

    return ( 
        <div className="gallery">
            <div className="pages-title">Gallery</div> 
            <div className="subPage-title">{product.name}</div>
            
            <div className="subPage-cont">
                <img src={product.img} />
                <div className="subPage-info">
                    <p>{product.description}</p>
                    <div className="subPage-info-tags">
                        <span>Creation date: {product.date}</span>
                        <span>Category: {product.category}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Codes;