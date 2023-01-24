import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/action/product.action";

const ProductList = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  const getData = async () => {
    try {
      dispatch(getProduct());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Core plugin JavaScript--> */}
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        {/* <!-- Custom scripts for all pages--> */}
        <script src="js/sb-admin-2.min.js"></script>

        {/* <!-- Page level plugins --> */}
        <script src="vendor/chart.js/Chart.min.js"></script>

        {/* <!-- Page level custom scripts --> */}
        <script src="js/demo/chart-area-demo.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>

        {/* <!-- Page level plugins --> */}
        <script src="vendor/datatables/jquery.dataTables.min.js"></script>
        <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

        {/* <!-- Page level custom scripts --> */}
        <script src="js/demo/datatables-demo.js"></script>
      </Helmet>

      <main id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navi />

              <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Products</h1>
                <p class="mb-4">Manage products here.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Products Database
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        class="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <th class="col-2">Product ID</th>
                            <th class="col-3">Image</th>
                            <th class="col-2">Name</th>
                            <th class="col-2">Store</th>
                            <th class="col-2">Price</th>
                            <th class="col-1">Action</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Product ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Store</th>
                            <th>Price</th>
                            <th>Action</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          {product
                            ? product.map((item) => (
                                <tr>
                                  <td>{item.product_id}</td>
                                  <td>
                                    <img
                                      src={item.image}
                                      alt="product"
                                      style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </td>
                                  <td>{item.name}</td>
                                  <td>{item.seller_name}</td>
                                  <td>Rp {item.price}</td>
                                  <td>
                                    <div class="d-flex justify-content-between">
                                      <Link
                                        to={`/product/${item.product_id}`}
                                        class="btn btn-info btn-circle"
                                      >
                                        <i class="fas fa-info-circle"></i>
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            : ""}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductList;
