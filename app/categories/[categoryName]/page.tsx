"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import { useEffect, useState } from "react";
import FetchCategoryProducts from "./FetchCategoryProducts";
import { useSearchParams } from "next/navigation";
import { categories } from "@/data/CategoriesObject";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import CategoryLoading from "./components/CategoryLoading";
import { Slider } from "@/components/ui/slider";
import { ProductInDbType } from "@/types/ProductInDbType";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious
} from "@/components/ui/pagination";

export default function CategoryName({ params }: any) {
   const categoryName = params.categoryName;
   const queryParams = useSearchParams();
   const categoryTitle = queryParams.get("title");
   const decodedCategoryName = categoryName && decodeURIComponent(categoryName);
   const decodedCategoryTitle = categoryTitle && decodeURIComponent(categoryTitle);

   const [products, setProducts] = useState<ProductInDbType[]>();
   const [productPrice, setProductPrice] = useState<number>(500);
   const [searchProducts, setSearchProducts] = useState("");
   const [totalPages, setTotalPages] = useState(0);
   const [page, setPage] = useState(0);

   useEffect(() => {
      document.title = decodedCategoryName;

      FetchCategoryProducts({ setProducts, categoryName, page, setTotalPages });
   }, [page]);

   if (!products) {
      return <CategoryLoading categoryName={decodedCategoryName} categoryTitle={decodedCategoryTitle} />;
   }

   const handleProductPrice = (value: number[]) => {
      const productPrice = value[0];
      setProductPrice(productPrice);
   };

   const handleSearchProducts = (e: any) => {
      const searchProducts = e.target.value;
      setSearchProducts(searchProducts);
   };

   const handlePagination = (page: number) => {
      setPage(page);
   };

   console.log(page);

   const links = ["Home", "Categories", `${decodedCategoryName}`];
   const findContent = categories.find((category) => category.content.includes(categoryName) || category.title.includes(categoryName));
   const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchProducts.toLocaleLowerCase()));

   return (
      <div>
         <div className="flex w-full bg-body-background justify-center items-center h-[300px]">
            <h1 className="text-6xl text-dark">{decodedCategoryName}</h1>
         </div>
         <div className="flex lg:flex-row flex-col p-12 gap-4">
            <div className="flex flex-col lg:w-1/3 lg:text-start text-center lg:justify-start justify-center gap-4">
               <Breadcrumb links={links} />
               {/* <h1 className="text-2xl text-light">{decodedCategoryName}</h1> */}
               <div>
                  <Link href={`/categories/${findContent?.title}`}>
                     <h1 className="text-xl text-dark hover:underline hover:cursor-pointer">{findContent?.title}</h1>
                  </Link>
                  {findContent?.content.map((content, key) => (
                     <Link href={{ pathname: `/categories/${content}` }} key={key + key}>
                        <h2 className="text-base hover:text-light hover:underline hover:cursor-pointer">{content}</h2>
                     </Link>
                  ))}
               </div>
               <div>
                  <h1 className="text-xl text-dark">Filter by</h1>
                  <p>Price range: {productPrice} €</p>
                  <Slider
                     defaultValue={[500]}
                     min={0}
                     max={500}
                     step={1}
                     value={[productPrice]}
                     onValueChange={handleProductPrice}
                     className="mx-auto lg:mx-0 w-40 my-2"
                  />
               </div>
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
