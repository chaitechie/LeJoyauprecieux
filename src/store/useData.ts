import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { db } from "../firebase.config";

import {
  getDocs,
  collection,
  limit,
  query,
  DocumentData,
} from "firebase/firestore";
interface DataState {
  products: DocumentData;
  setProducts: () => void;
  loading: boolean;
  error: null;
  productTitle:string,
  setProductTitle : (title:string) => void,
  category:string,
  setCategory:(category:string)=>void,
}

const useDataStore = create<DataState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        loading: false,
        error: null,
      
        setProducts: async () => {
          set({ loading: false, error: null });

          try {
            const listingRef = collection(db, "listings");
            const q = query(listingRef, limit(12));
            const listing: DocumentData[] = [];
            const querySnap = await getDocs(q);
            querySnap.forEach((doc) => {
              listing.push({
                id: doc.id,
                data: doc.data(),
              });
            });
            set({ products: listing, loading: false });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            set({ error: error.message, loading: false });
          }
        },
        productTitle:"",
        setProductTitle: (title: string) => set({ productTitle: title }),
        category:"",
        setCategory:(category:string) => set({category:category })
      }),

      { name: "DataStore" }
    )
  )
);
export default useDataStore;
