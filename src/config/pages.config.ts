export const headerPages = {
    homePage: {
        id: "homePage",
        to: "/",
        text: "Home",
        icon: "🙅"
    },
    productPage: {
        id: "productPage",
        to: "/product",
        text: "Product",
        icon: "🙅"
    },

    pricingPage: {
        id: "pricing",
        to: "/pricing",
        text: "Pricing",
        icon: "💰"
    },

    loginPage: {
        id: "login",
        to: "/login",
        text: "Login",
        icon: "😚"
    },

    appPage: {
        id: "appPage",
        to: "/app",
        text: "App",
        icon: "🈸",

        subPages: {
            citiesPage: {
                id: "citiesPage",
                to: "/app/cities",
                text: "Cities",
                icon: "🗺️"
            },

            countriesPage: {
                id: "countriesPage",
                to: "/app/countries",
                text: "Countries",
                icon: "🌎"
            }
        }
    }
};

const pagesConfig = {
    ...headerPages
};

export default pagesConfig;
