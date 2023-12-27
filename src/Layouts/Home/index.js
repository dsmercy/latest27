import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePageSearch from "./HomePageSearch";
import DemandingCategories from "./DemandingCategories";
import SearchMap from "./SearchMap";
import EmployerCraousel from "./EmployerCraousel";
import CollegeCraousel from "./CollegeCraousel";
import ReviewsCraousel from "./ReviewsCraousel";
import BlogsCraousel from "./BlogsCraousel";
import SearchOpportunity from "./SearchOpportunity";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/bootstrap.min.css";

const HomePageBody =()=>{
    return(
        <>
        <Header/>
        <HomePageSearch/>
        <SearchMap/>
        <DemandingCategories/>
        <EmployerCraousel/>
        <CollegeCraousel/>
        <ReviewsCraousel/>
        <BlogsCraousel/>
        <SearchOpportunity/>
        <Footer/>
        </>
    )
}

export default HomePageBody;