import ProductCard from "../ProductCard/ProductCard";

function ProductList({products}) {
    return(
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id}/>
                ))}
            </div>
    )
}

export default ProductList;