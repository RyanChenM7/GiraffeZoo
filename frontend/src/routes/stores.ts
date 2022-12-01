import { writable } from "svelte/store";
import { browser } from "$app/environment";
import type { ListingType } from "./types/listing.type";


let stored: any = "";
if (browser) {
    stored = localStorage.getItem("storedListings");
}
export const storedListings = writable<ListingType>(browser && (JSON.parse(stored) || ""));
storedListings.subscribe((val: any) => {
    if (browser) {
        localStorage.setItem("storedListings", JSON.stringify(val));
    }
});



