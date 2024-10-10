interface IPages {
    id: string;
    to: string;
    text: string;
    icon?: string;
}

export const headerPages: { [key: string]: IPages } = {
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
        icon: "🈸"
    }
};

export const appPages: { [key: string]: IPages } = {
    citiesPage: {
        id: "citiesPage",
        to: "/cities",
        text: "Cities",
        icon: "🗺️"
    },

    countriesPage: {
        id: "countriesPage",
        to: "/countries",
        text: "Countries",
        icon: "🌎"
    }
};

const pagesConfig: { [key: string]: IPages } = {
    ...headerPages,
    ...appPages
};

export default pagesConfig;
