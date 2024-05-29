"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import { useEffect, useState } from "react";
import FetchCategoryProducts from "./FetchCategoryProducts";
import { categories } from "@/data/CategoriesObject";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import CategoryLoading from "./components/CategoryLoading";
import { ProductInDbType } from "@/types/ProductInDbType";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import CategoryNameDisplay from "./components/CategoryNameDisplay";
import Filters from "./components/Filters";
import Content from "./components/Content";

export default function CategoriesLayout({ params }: any) {
   const categoryName = params.categoryName;
   const decodedCategoryName = categoryName && decodeURIComponent(categoryName);

   const [products, setProducts] = useState<ProductInDbType[]>();
   const [productPrice, setProductPrice] = useState<number>(150);
   const [searchProducts, setSearchProducts] = useState("");
   const [totalPages, setTotalPages] = useState(0);
   const [page, setPage] = useState(0);

   useEffect(() => {
      FetchCategoryProducts({ setProducts, categoryName, page, setTotalPages });
   }, [page]);

   if (!products) {
      return <CategoryLoading categoryName={decodedCategoryName} />;
   }

   const handleSearchProducts = (e: any) => {
      const searchProducts = e.target.value;
      setSearchProducts(searchProducts);
   };

   const handlePagination = (page: number) => {
      setPage(page);
   };

   const links = ["Home", "Categories", `${decodedCategoryName}`];
   const findContent = categories.find((category) => category.content.includes(categoryName) || category.title.includes(categoryName));
   const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchProducts.toLocaleLowerCase()));

   return (
      <div>
         <CategoryNameDisplay categoryName={categoryName} />
         <div className="flex lg:flex-row flex-col p-12 gap-4">
            <div className="flex flex-col lg:w-1/3 lg:text-start text-center lg:justify-start justify-center gap-4">
               <Breadcrumb links={links} />
               <Content findContent={findContent} />
               <Filters productPrice={productPrice} setProductPrice={setProductPrice} />
            </div>

            <div className="flex flex-col lg:w-2/3">
               <div className="flex lg:justify-end justify-center">
                  <input
                     type="text"
                     placeholder="Search product..."
                     className="input rounded-full border-border-light focus:border-border-light border-2 w-72 bg-white "
                     id="productSearch"
                     onChange={handleSearchProducts}
                     value={searchProducts}
                  />
               </div>

               <div className="lg:gap-4 gap-6 grid lg:grid-cols-3 grid-cols-1 my-4">
                  {products &&
                     filteredProducts &&
                     filteredProducts
                        .filter((product) => {
                           const productIva = product.price * 0.23;
                           const productFinalPrice = product.price + productIva;

                           return productFinalPrice / 100 < productPrice;
                        })
                        .map((product, key) => {
                           return (
                              <Link key={key + key} href={{ pathname: `/product/${product.title}`, query: { productId: product.productId } }}>
                                 <ProductCard key={key + key} title={product.title} price={product.price} image={product.image} />
                              </Link>
                           );
                        })}
               </div>
               <div>
                  <Pagination>
                     <PaginationContent>
                        {[...Array(totalPages)].map((_, key) => (
                           <PaginationItem onClick={() => handlePagination(key)} key={key + key}>
                              <PaginationLink className="hover:cursor-pointer hover:bg-button-background hover:text-white" isActive={page === key}>
                                 {key + 1}
                              </PaginationLink>
                           </PaginationItem>
                        ))}
                     </PaginationContent>
                  </Pagination>
               </div>
            </div>
         </div>
      </div>
   );
}
