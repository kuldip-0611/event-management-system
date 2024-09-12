import React from 'react'
import {SelectionProps} from './selection.props'
import {Button} from 'react-bootstrap'
import './selection.css'

const Selection: React.FC<SelectionProps> = ({data, selectedId, setSelectedId}) => {
  return (
    <>
      {data.map((item, index) => (
        <Button
          key={index}
          className={`${
            selectedId === item.id ? 'selection-btn-active' : 'selection-btn'
          } bg-transparent me-3`}
          style={{boxShadow: 'none'}}
          onClick={() => setSelectedId(item.id)}
        >
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            {item?.icon}
            <p
              className={`${
                selectedId === item.id ? 'selection-btn-text-active' : 'selection-btn-text'
              }`}
            >
              {item.title}
            </p>
          </div>
        </Button>
      ))}
    </>
  )
}

export default Selection
