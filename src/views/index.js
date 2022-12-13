import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../components/module/sidebar";
import Navi from "../components/module/navi";
import Footer from "../components/module/footer";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <!-- Custom fonts for this template --> */}
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />

        {/* <!-- Custom styles for this template --> */}
        <link href="css/sb-admin-2.min.css" rel="stylesheet" />

        {/* <!-- Custom styles for this page --> */}
        <link
          href="vendor/datatables/dataTables.bootstrap4.min.css"
          rel="stylesheet"
        />
      </Helmet>

      <main id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navi />

              <div className="container d-flex justify-content-center align-items-center h-75">
                <p style={{ fontSize: "80px" }}>#Re:Vision</p>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
