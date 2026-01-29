import { ICategory } from "./types";

export const categoryList = [
    "weight-management",
    "energy-products",
    "digestive-health",
    "bone-and-joint-health",
    "skin-and-eye-health",
    "women-health",
    "children-health",
    "cardiovascular-health",
    "enhancers",
    "veritilife-products"
] as const


export const categories: ICategory = {
    "weight-management": {
        title: "Weight Management",
        description: "Products designed to support healthy weight control and metabolism."
    },
    "energy-products": {
        title: "Energy Products",
        description: "Nutrition products that help boost daily energy and stamina."
    },
    "digestive-health": {
        title: "Digestive Health",
        description: "Products that support gut health, digestion, and nutrient absorption."
    },
    "bone-and-joint-health": {
        title: "Bone & Joint Health",
        description: "Supplements formulated to support bone strength and joint mobility."
    },
    "skin-and-eye-health": {
        title: "Skin & Eye Health",
        description: "Products focused on improving skin quality and maintaining eye health."
    },
    "women-health": {
        title: "Women Health",
        description: "Health and wellness products tailored for women’s nutritional needs."
    },
    "children-health": {
        title: "Children Health",
        description: "Nutrition products developed to support children’s growth and immunity."
    },
    "cardiovascular-health": {
        title: "Cardiovascular Health",
        description: "Products that help support heart health and healthy circulation."
    },
    "enhancers": {
        title: "Enhancers",
        description: "Supplements that enhance overall wellness, sleep, and vitality."
    },
    "veritilife-products": {
        title: "Veritilife Products",
        description: "Plant-based nutrition and wellness products from the Nutrilite range."
    }
}
