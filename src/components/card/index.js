import React from "react";
import UserIcon from '../../assets/images/svg/UserIcon'
export function PipelineCard(props) {
  return (
    <div className="p-3 pipeline-card">
      <div className="d-flex justify-content-between align-items-center">
        <div className="high-tag">{props.status}</div>
        <span className="user-img"></span>
      </div>
      <p className="title">{props.name}</p>
      <p>
        Last updated:
        <span className="text-Secondar-70">{props.date1}</span>
      </p>
      <p>
        Last Contacted:
        <span className="text-Secondar-70">{props.date2}</span>
      </p>
      <p>
        City: <span className="text-Secondar-70">{props.city}</span>
      </p>
      <p>
        Properties: <span className="text-Secondar-70">{props.properties}</span>
      </p>
      <p>
        Value: <span className="text-Secondar-70">{props.date3}</span>
      </p>
    </div>
  );
}

export function GISCard(props) {
  return (
    <div className="list-item">
    <p className="font-14 font-weight-600 text-secondary-60">{props.location}</p>

    <div className="row mb-2">
        <div className="col-6">
            <span className="title">Neighborhood</span>
        </div>
        <div className="col-6">
            <span className="detail">{props.neighborhood}</span>
        </div>
    </div>
    <div className="row mb-2">
        <div className="col-6">
            <span className="title">Area</span>
        </div>
        <div className="col-6">
            <span className="detail">{props.area}</span>
        </div>
    </div>
    <div className="row mb-2">
        <div className="col-6">
            <span className="title">Units</span>
        </div>
        <div className="col-6">
            <span className="detail">{props.units}</span>
        </div>
    </div>
    <div className="row mb-2">
        <div className="col-6">
            <span className="title">Property Type</span>
        </div>
        <div className="col-6">
            <span className="detail">{props.type}</span>
        </div>
    </div>
    <a href="#" className="text-Primary-Brand-Default upper font-weight-700 font-12">View
        Details</a>
    <a href="#" className="text-Primary-Brand-Default upper font-weight-700 font-12 ml-2">Add to
        campaign</a>
</div>
  )
}
export const CustomCard = ({children}) => {
    return (
        <div className="custom-card p-4">
            {children}
        </div>
    )
}

