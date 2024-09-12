import React from 'react'
import {SpacerProps} from './spacer.props'

const Spacer: React.FC<SpacerProps> = ({size}) => {
  const styles = {
    marginTop: size,
    marginBottom: size,
  }

  return <div className="spaced-component" style={styles} />
}

export default Spacer
