import React from "react";
import './style/userNav.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const UserNav = () => {

    return (
        <>
            <header class="header">
                <div class="header__topbar bg-main text-white">
                    <div class="container">
                        <div class="row pt-2">
                            <div class="col-md-6 col-sm-12">
                                <ul class="header__topbar-contact float-lg-left text-center">
                                    <li class="d-inline-block mr-3"><i class="fa fa-phone mr-2"></i>+(977) 9801010101</li>
                                    <li class="d-inline-block mr-3"><i class="fa fa-envelope-square mr-2"></i><a href="mailto:info@gmail.com" class="text-white">info@gmail.com</a></li>
                                    <li class="d-inline-block mr-3">
                                        <i class="fa fa-facebook-square mr-2"></i>
                                        <i class="fa fa-instagram"></i>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-6 col-sm-12">
                                <ul class="header__topbar-contact float-lg-right text-center">
                                    <li class="d-inline-block mr-3">Free Shipping For All Products</li>
                                    <li class="d-inline-block mr-3"><a href="#" class="text-white">FAQs</a></li>
                                    <li class="d-inline-block mr-3"><a href="#" class="text-white">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-xl navbar-light">
                    <div class="container">
                        <a href="index.html" class="navbar-brand">
                            <img src="img/logo-small.png" alt="logo" class="img-fluid" width="125px"/>
                        </a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar">
                            <ul class="navbar-nav">
                                <li class="nav-item active ml-xl-3 ml-1"><a href="index.html" class="nav-link"><span class="sr-only"></span> Home</a></li>
                                <li class="nav-item ml-1"><a href="categories.html" class="nav-link">Categories</a></li>
                                <li class="nav-item ml-1"><a href="shop.html" class="nav-link">Shop</a></li>
                                <li class="nav-item ml-1"><a href="brand.html" class="nav-link">Brand</a></li>
                                <li class="nav-item ml-1"><a href="blogs.html" class="nav-link">Blogs</a></li>
                            </ul>
                            <form action="#" class="form-inline ml-auto search mr-4">
                                <input type="text" class="search-input" placeholder="What are you looking for?"/>
                                    <button class="search-button">
                                        <i class="fa fa-search search-icon"></i>
                                    </button>
                            </form>
                            <ul class="navbar-nav">
                                <li class="nav-item ml-2"><a href="#" class="nav-link"><i class="fa fa-user"></i></a></li>
                                <li class="nav-item ml-2"><a href="#" class="nav-link"><i class="fa fa-cart-plus"></i><span class="badge text-main">10</span></a></li>
                                <li class="nav-item ml-2"><a href="#" class="nav-link"><i class="fa fa-star"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

        </>


    );
}

export default UserNav;
