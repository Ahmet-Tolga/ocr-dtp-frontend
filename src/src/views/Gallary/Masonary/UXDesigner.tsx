import React from 'react'
import Masonry from 'react-responsive-masonry';
import gallaryGrid4 from '../../../assets/images/gallery-grid/img-grd-gal-4.jpg'
import gallaryGrid9 from '../../../assets/images/gallery-grid/img-grd-gal-9.jpg'
import gallaryGrid14 from '../../../assets/images/gallery-grid/img-grd-gal-14.jpg'



import avatar4 from '../../../assets/images/user/avatar-4.jpg'


const UXDesigner = () => {
    return (
        <React.Fragment>
            <Masonry columnsCount={4} gutter="0px"> 
                <div className="col-xxl-3 col-md-4 col-sm-6 element-item uiux" style={{ width: "auto", padding: "8px" }}>
                    <a className="card-gallery" data-fslightbox="gallery" href={gallaryGrid4}>
                        <img className="img-fluid" src={gallaryGrid4} alt="Card image" />
                        <div className="gallery-hover-data card-body">
                            <div className="position-relative text-end">
                                <div className="form-check prod-likes d-inline-block">

                                    <i data-feather="heart" className="prod-likes-icon"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="chat-avtar">
                                        <img className="rounded-circle img-fluid wid-30" src={avatar4} alt="User image" />
                                    </div>
                                </div>
                                <div className="flex-grow-1 mx-2 text-white">
                                    <p className="mb-0 text-truncate w-100">Alexander</p>
                                    <span className="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>      
                <div className="col-xxl-3 col-md-4 col-sm-6 element-item uiux" style={{ width: "auto", padding: "8px" }}>
                    <a className="card-gallery" data-fslightbox="gallery" href={gallaryGrid9}>
                        <img className="img-fluid" src={gallaryGrid9} alt="Card image" />
                        <div className="gallery-hover-data card-body">
                            <div className="position-relative text-end">
                                <div className="form-check prod-likes d-inline-block">

                                    <i data-feather="heart" className="prod-likes-icon"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="chat-avtar">
                                        <img className="rounded-circle img-fluid wid-30" src={avatar4} alt="User image" />
                                    </div>
                                </div>
                                <div className="flex-grow-1 mx-2 text-white">
                                    <p className="mb-0 text-truncate w-100">Alexander</p>
                                    <span className="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>  
                <div className="col-xxl-3 col-md-4 col-sm-6 element-item uiux" style={{ width: "auto", padding: "8px" }}>
                    <a className="card-gallery" data-fslightbox="gallery" href={gallaryGrid14}>
                        <img className="img-fluid" src={gallaryGrid14} alt="Card image" />
                        <div className="gallery-hover-data card-body">
                            <div className="position-relative text-end">
                                <div className="form-check prod-likes d-inline-block">

                                    <i data-feather="heart" className="prod-likes-icon"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="chat-avtar">
                                        <img className="rounded-circle img-fluid wid-30" src={avatar4} alt="User image" />
                                    </div>
                                </div>
                                <div className="flex-grow-1 mx-2 text-white">
                                    <p className="mb-0 text-truncate w-100">Alexander</p>
                                    <span className="mb-0 text-sm text-truncate w-100">Photographer artist</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> 
            </Masonry>
        </React.Fragment>
    )
}

export default UXDesigner
