import React, { Component } from 'react'
import { connect } from 'react-redux'

class CatergoriesComponent extends Component {
    render() {
        return (
            <div className="btn-group">
                {this.props.catergoryList.map((item,index) =>(
                    <button key={index} className={this.props.choosenCatergory === item.type ?
                        'btn btn-primary mr-1'
                        :
                        'btn btn-secondary mr-1'
                    }
                    onClick={()=>this._chooseCatergory(item.type)}
                    >
                        {item.showName}
                    </button>
                ))}
            </div>
            
            
            // <div>
            //     <button className="btn btn-secondary">
            //         Quần
            //     </button>
            //     <button className="btn btn-secondary">
            //         Áo
            //     </button>
            //     <button className="btn btn-secondary">
            //         Tóc
            //     </button>
            // </div>
        )
    }
    _chooseCatergory = (payload)=>{
        this.props.dispatch({
            type:'SET_CATERGORY',
            payload
        })
    }
}
const mapStateToProps = state => ({
    catergoryList: state.catergories,
    choosenCatergory:state.choosenCatergory
});
export default connect(mapStateToProps, null)(CatergoriesComponent);
