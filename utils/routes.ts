import { Grid2X2Check, Home, Info, Package } from "lucide-react";
import abs from "./abs";


const routes_main = {
    home: {
        link: "/",
        title: "Home",
        icon: Home,
        description: "Home page for " + abs.name,
    },

    products: {
        link: "/products",
        title: "Products",
        icon: Package,
        description: "Products page for " + abs.name,
    },
    categories: {
        link: "/categories",
        title: "Categories",
        icon: Grid2X2Check,
        description: "Categories page for " + abs.name,
    },

    about: {
        link: "/about",
        title: "About Us",
        icon: Info,
        description: "Learn more about " + abs.name + " and what we do.",
    }
};

export default routes_main;
