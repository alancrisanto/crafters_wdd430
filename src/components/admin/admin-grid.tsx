import ProductRow from "./product-item";
import styles from "./admin.module.css";
import { connectDB } from "@/lib/connection";
import Product from "@/models/Products";

export default async function AdminGrid() {
    // Connects to MongoDB
    connectDB();

    //Retrieve the data
	const products = await Product.find({});
    const productCards: any[] = [];
    products.map((product)=> {
        productCards.push( <ProductRow img={product.image} productName={product.product} price={product.price} category={product.category}/>)
    })

    return(
        <div className={styles.bodyAdminGrid}>
            <div className={styles.adminGrid}>
                <div><p>Product Name</p></div>
                <div><p>Price </p></div>
                <div><p>Description</p></div>
                <div><p>Delete</p></div>
            </div>
            {productCards}
        </div>

    )
}