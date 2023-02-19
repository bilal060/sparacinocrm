import React from 'react'

export function Heading(props) {
  return (
    <h1 className="custom-heading">{props.heading}</h1>
  )
}

 export function PipelineHeading(props) {
  return (
    <p className="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3 height-36">
    {props.heading}
  </p>
  )
}

