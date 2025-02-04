import {create} from 'zustand';
import {devtools,persist} from 'zustand/middleware';
import { db } from "../firebase.config";


import {
    getDocs,
    collection,
    where,
    query,
    DocumentData,
  } from "firebase/firestore";
export interface SingleProductState {
    singleProduct:DocumentData,
    setSingleProduct: (title:string) => Promise<void>,
    loading:boolean,
    error:null,
    recommendProduct:DocumentData,
    setRecommendProduct:(category:string) => Promise<void>

}

 const useProductStore = create<SingleProductState>()(
    devtools(
        persist(
            ((set) => ({
                loading:false,
                error:null, 
                singleProduct:[],
                recommendProduct:[],
                setRecommendProduct:async(category) => {
                  try {
                    const productRef = collection(db, "listings");
                    const q = query(productRef, where("category","==",category));
                     
                     const product:DocumentData = [];
                    const querySnap = await getDocs(q);
                    querySnap.forEach((doc) => {
                      return product.push({data:doc.data()});
                      
                    });
                    set({ recommendProduct: product });

                  } catch (error) {
                    console.error(error)
                  }
                },
                setSingleProduct: async(title) => {
                    set({ loading: true, error: null });
                    try {
                        const productRef = collection(db, "listings");
                        const q = query(productRef, where("title","==",title));
                         
                         const product:DocumentData = [];
                        const querySnap = await getDocs(q);
                        querySnap.forEach((doc) => {
                          return product.push({data:doc.data()});
                          
                        });
                        set({ singleProduct: product[0], loading: false });

                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      } catch (error:any) {
                        set({error:error.message})
                      }

                },

                })
            )
            ,{name:"productstore"}
        )
    )
 )
export default useProductStore;