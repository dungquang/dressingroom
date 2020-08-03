import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductItemComponent extends Component {
    render() {
        const { name, imgSrc_jpg } = this.props.item

        return (
            <div className="card p-2 my-2">
                <img src={imgSrc_jpg} alt="dressing room" />
                <p>{name}</p>
                <button className="btn btn-success"
                    onClick={() => this._chooseClothe(this.props.item)}
                >
                    Thử Đồ
                    </button>
            </div>


        )
    }
    _chooseClothe = (cloth) => {
        this.props.dispatch({
            type: 'SET_CLOTH',
            payload: {
                type: cloth.type,//xem data product reducer
                img: cloth.imgSrc_png 
            }
        })
    }

}

export default connect() (ProductItemComponent)

