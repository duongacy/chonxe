import React, { Component } from 'react';
import Details from '../../components/Details';
import products from '../../data/data';

class Home extends Component {
    state = {
        carShow: {},
        isShow: false
    }

    closeChiTiet = () => {
        this.setState({
            isShow: false
        })
    }
    handleXemChiTiet = (item) => {
        this.setState({
            carShow: item,
            isShow: true
        })
    }
    render() {
        const { carShow, isShow } = this.state;
        return (
            <>
                <div className="container py-5">
                    <div className="row">
                        {products.map((item, key) => (
                            <div className="col-3" key={key}>
                                <div className="card rounded-0">
                                    <img src={item.src} className="w-100" alt="..." />
                                    <div className="card-body text-start">
                                        <p className="text-uppercase fw-bold text-primary">
                                            {item.name}
                                        </p>
                                        <p className="fw-bold fs-sm">
                                            $ {item.price}
                                        </p>
                                        <button className="btn btn-success w-100 rounded-0 fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#detailsModal"
                                            onClick={() => this.handleXemChiTiet(item)}>Xem chi tiết</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                

                <Details carShow={carShow} />
            </>
        );
    }
}

export default Home;