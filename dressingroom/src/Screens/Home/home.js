import React, { Component } from 'react'
import HeaderComponent from '../../Layouts/Header/header'
import FooterComponent from '../../Layouts/Footer/footer'
import ModelComponent from '../../Components/Model/model'
import ProductComponent from '../../Components/Products/products'
import CatergoriesComponent from '../../Components/Catergories/catergories'


export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <CatergoriesComponent />
                            <ProductComponent />
                        </div>
                        <div className="col-6">
                            <ModelComponent />
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}
