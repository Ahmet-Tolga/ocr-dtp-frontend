import React from 'react'
import Masonry from 'react-responsive-masonry';
import gallaryGrid1 from '../../../assets/images/gallery-grid/img-grd-gal-1.jpg'
import gallaryGrid6 from '../../../assets/images/gallery-grid/img-grd-gal-6.jpg'
import gallaryGrid11 from '../../../assets/images/gallery-grid/img-grd-gal-11.jpg'
import gallaryGrid16 from '../../../assets/images/gallery-grid/img-grd-gal-16.jpg'
import avatar1 from '../../../assets/images/user/avatar-1.jpg'


const WebDesigner = () => {
  return (
    <React.Fragment>
            <Masonry columnsCount={4} gutter="0px">
                <div className="col-xxl-3 col-md-4 col-sm-6 element-item web" style={{width:"auto",padding:"8px"}}>
                    <a className="card-gallery" data-fslightbox="gallery" href={gallaryGrid1}>
                        <img className="img-fluid" src={gallaryGrid1} alt="Card image" />
                        <div className="gallery-hover-data card-body">
                            <div className="position-relative text-end">
                                <div className="form-check prod-likes d-inline-block">

                                    <i data-feather="heart" className="prod-likes-icon"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="chat-avtar">
                                        <img className="rounded-circle img-fluid wid-30" src={avatar1} alt="User image" />
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
 
                <div className="col-xxl-3 col-md-4 col-sm-6 element-item web" style={{width:"auto",padding:"8px"}}>
                    <a className="card-gallery" data-fslightbox="gallery" href={gallaryGrid6}>
                        <img className="img-fluid" src={gallaryGrid6} alt="Card image" />
                        <div className="gallery-hover-data card-body">
                            <div className="position-relative text-end">
                                <div className="form-check prod-likes d-inline-block">

                                    <i data-feather="heart" className="prod-likes-icon"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="chat-avtar">
                                        <img className="rounded-circle img-fluid wid-30" src={avatar1} alt="User image" />
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
 
                <div className="col-xxl-3 col-md-4 col-sm-6 element-item web" style={{width:"auto",padding:"8px"}}>
                    <a className="card-gallery" data-fslightbox="gallery" href={gallaryGrid11}>
                        <img className="img-fluid" src={gallaryGrid11} alt="Card image" />
                        <div className="gallery-hover-data card-body">
                            <div className="position-relative text-end">
                                <div className="form-check prod-likes d-inline-block">

                                    <i data-feather="heart" className="prod-likes-icon"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="chat-avtar">
                                        <img className="rounded-circle img-fluid wid-30" src={avatar1} alt="User image" />
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

                <div className="col-xxl-3 col-md-4 col-sm-6 element-item web" style={{width:"auto",padding:"8px"}}>
                    <a className="card-gallery" data-fslightbox="gallery" href={gallaryGrid16}>
                        <img className="img-fluid" src={gallaryGrid16} alt="Card image" />
                        <div className="gallery-hover-data card-body">
                            <div className="position-relative text-end">
                                <div className="form-check prod-likes d-inline-block">

                                    <i data-feather="heart" className="prod-likes-icon"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="chat-avtar">
                                        <img className="rounded-circle img-fluid wid-30" src={avatar1} alt="User image" />
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

export default WebDesigner
