import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <div className="card hovercard text-center">
                    <div className="card-background m-3">
                        <h1 className="text-primary">DRESSING ROOM</h1>
                    </div>
                    <div className="useravatar">
                        <h3>ĐINH QUANG DŨNG</h3>
                    </div>
                    <div className="card-info"> <span className="card-title">Đào tạo chuyên gia lập trình - Dự án thử đồ trực tuyến - Virtual Dressing Room</span>
                    </div>
                </div>

            </>
        )
    }
}
