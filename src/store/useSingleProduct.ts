/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  
  DocumentData,
} from "firebase/firestore";
interface DataState {
  singleProduct: DocumentData;
  setSingleProduct: (singleProduct:DocumentData) => void;
  productName:string,

setProductName: (productName:string) => void;
  
}

const useDataStore = create<DataState>()(
  devtools(
    persist(
      (set) => ({
        singleProduct:[],
        setSingleProduct : (singleProduct) => {
            return set({ singleProduct: singleProduct });
        },
        productName:"",
        setProductName: (productName:any) => set({ productName })
      }),

      { name: "DataStore" }
    )
  )
);
export default useDataStore;
