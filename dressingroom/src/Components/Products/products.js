import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItemComponent from '../ProductItem/productItem'

class ProductComponent extends Component {
    render() {
        return (
            <div className="row">
                {this.props.productList.filter(item =>item.type === this.props.choosenCatergory)
                .map((item, index) => (
                    <div className="col-4" key={index}>
                        <ProductItemComponent item={item} />
                    </div>
                )

                )}
            </div>

            
               
            
        )
    }
};
const mapStateToProps = state => ({
    productList: state.products,
    choosenCatergory:state.choosenCatergory
});
export default connect(mapStateToProps,null) (ProductComponent);
