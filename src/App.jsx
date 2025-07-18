import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFail from "./pages/PaymentFail";
import PaymentCancel from "./pages/PaymentCancel";
import Maintainence from "./pages/Maintainence";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <ProductDetails />
//       </Layout>
//     ),
//   },
//   {
//     path: "/shop-cart",
//     element: (
//       <Layout>
//         <Cart />
//       </Layout>
//     ),
//   },
//   {
//     path: "/checkout",
//     element: (
//       <Layout>
//         <Checkout />
//       </Layout>
//     ),
//   },
//   {
//     path: "/contact",
//     element: (
//       <Layout>
//         <Contact />
//       </Layout>
//     ),
//   },
//   {
//     path: "/payment-success",
//     element: (
//       <Layout>
//         <PaymentSuccess />
//       </Layout>
//     ),
//   },
//   {
//     path: "/payment-failed",
//     element: (
//       <Layout>
//         <PaymentFail />
//       </Layout>
//     ),
//   },
//   {
//     path: "/payment-cancelled",
//     element: (
//       <Layout>
//         <PaymentCancel />
//       </Layout>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <Layout>
//         <ProductDetails />
//       </Layout>
//     ),
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Maintainence />,
  },
  {
    path: "*",
    element: <Maintainence />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
