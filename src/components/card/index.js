import React from "react";

export function PipelineCard(props) {
  return (
    <div class="p-3 pipeline-card">
      <div class="d-flex justify-content-between align-items-center">
        <div class="high-tag">{props.status}</div>
        <span class="user-img"></span>
      </div>
      <p class="title">{props.name}</p>
      <p>
        Last updated:
        <span class="text-Secondar-70">{props.date1}</span>
      </p>
      <p>
        Last Contacted:
        <span class="text-Secondar-70">{props.date2}</span>
      </p>
      <p>
        City: <span class="text-Secondar-70">{props.city}</span>
      </p>
      <p>
        Properties: <span class="text-Secondar-70">{props.properties}</span>
      </p>
      <p>
        Value: <span class="text-Secondar-70">{props.date3}</span>
      </p>
    </div>
  );
}

export function GISCard(props) {
  return (
    <div class="list-item">
    <p class="font-14 font-weight-600 text-secondary-60">{props.location}</p>

    <div class="row mb-2">
        <div class="col-6">
            <span class="title">Neighborhood</span>
        </div>
        <div class="col-6">
            <span class="detail">{props.neighborhood}</span>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col-6">
            <span class="title">Area</span>
        </div>
        <div class="col-6">
            <span class="detail">{props.area}</span>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col-6">
            <span class="title">Units</span>
        </div>
        <div class="col-6">
            <span class="detail">{props.units}</span>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col-6">
            <span class="title">Property Type</span>
        </div>
        <div class="col-6">
            <span class="detail">{props.type}</span>
        </div>
    </div>
    <a href="#" class="text-Primary-Brand-Default upper font-weight-700 font-12">View
        Details</a>
    <a href="#" class="text-Primary-Brand-Default upper font-weight-700 font-12 ml-2">Add to
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

