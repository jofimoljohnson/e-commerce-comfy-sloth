import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// domain------>    dev-317p3cnh5fvxf133.us.auth0.com
// client id.....>  pUMxEjBPZruDi66EtP6RqtbkmYyUVN7u

root.render(
    <Auth0Provider
        domain="dev-317p3cnh5fvxf133.us.auth0.com"
        clientId="pUMxEjBPZruDi66EtP6RqtbkmYyUVN7u"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
            </UserProvider>

        </Auth0Provider>
);
