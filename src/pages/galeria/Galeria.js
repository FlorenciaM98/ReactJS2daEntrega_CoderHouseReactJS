import { Link } from "react-router-dom";
import products from "./productsData";

function Galeria() {

    return ( 
        <div className="gallery">
            <div className="pages-title">Gallery</div> 
            <div className="productsCategory-render">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="product">
                            <div className="product-Name">{product.name}</div>
                            <img src={product.img}/>
                            <div className="product-Cat">{product.category}</div>
                            <Link to={`/gallery/${product.id}`}>Ver mas</Link>
                        </div>
                    )
                } )}
            </div>    
        </div>
        
    )
}


export default Galeria;