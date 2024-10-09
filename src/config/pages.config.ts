interface IHeaderPages {
    id: string;
    to: string;
    text: string;
    icon?: string;
}

export const headerPages: { [key: string]: IHeaderPages } = {
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

const pagesConfig = {
    ...headerPages
};

export default pagesConfig;
