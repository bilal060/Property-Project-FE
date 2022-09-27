import React from 'react'
import moment from "moment"
import { Link } from 'react-router-dom'

export default function PropertyListCard({ item }) {
  return (
    <>
      <div
        className="item col-lg-4 col-md-12 col-xs-12 landscapes sale my-2 pr-0 pb-0" >
        <div className="project-single mb-0 bb-0">
          <div className="project-inner project-head">
            <div className="homes">
              {/* homes img */}
              <Link to={`propertydetails/${item?._id}`} className="homes-img">
                {item?.featured && <div className="homes-tag button alt featured">Featured</div>}
                {item?.status === 'rent' && <div className="homes-tag button alt featured">For Rent</div>}
                {item?.status === 'sale' && <div className="homes-tag button sale ">For Sale</div>}
                <div className="homes-price">{item?.status === 'rent' ? `${item?.price}/mo` : item?.price}</div>
                <img src={process.env.REACT_APP_IMAGE_URL + item?.photo[0]} alt="home-1" className="img-responsive" />
              </Link>
            </div>
            <div className="button-effect">
              <Link to={`propertydetails/${item?._id}`} className="btn">
                <i className="fa fa-link" />
              </Link>
              <a
                href="https://www.youtube.com/watch?v=14semTlwyUY"
                className="btn popup-video popup-youtube"
              >
                <i className="fas fa-video" />
              </a>
              <a href="single-property-2.html" className="img-poppu btn">
                <i className="fa fa-photo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* homes content */}
      <div className="col-lg-8 col-md-12 homes-content pb-0 mb-44">
        {/* homes address */}
        <h3>
          <Link to={`propertydetails/${item?._id}`}>{item?.title}</Link>
        </h3>
        <p className="homes-address mb-3">
          <Link to={`propertydetails/${item?._id}`}>
            <i className="fa fa-map-marker" />
            <span>{`${item?.society.name} , ${item?.phase.name} , ${item?.block.name} ${item?.city} , ${item?.country}`}</span>
          </Link>
        </p>
        {/* homes List */}
        <ul className="homes-list clearfix pb-3">
          <li className="the-icons">
            <i className="flaticon-bed mr-2" aria-hidden="true" />
            <span>{item?.rooms} Bedrooms</span>
          </li>
          <li className="the-icons">
            <i className="flaticon-bathtub mr-2" aria-hidden="true" />
            <span>{item?.bathrooms} Bathrooms</span>
          </li>
          <li className="the-icons">
            <i className="flaticon-square mr-2" aria-hidden="true" />
            <span>{item?.area} sq ft</span>
          </li>
          <li className="the-icons">
            <i className="flaticon-car mr-2" aria-hidden="true" />
            <span>2 Garages</span>
          </li>
        </ul>
        <div className="footer">
          <a href="agent-details.html">
            <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" className="mr-2" /> Lisa Jhonson
          </a>
          <span>
            <i className="fas fa-calendar" /> {moment(item?.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </>
  )
}
