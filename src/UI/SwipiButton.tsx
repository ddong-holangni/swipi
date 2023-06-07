import { forwardRef, RefObject } from 'react'
import { SwipiButtonProps } from './types'

const SwipiButton = forwardRef<HTMLButtonElement, SwipiButtonProps>(
  ({ children, onClick, className, disabled }, ref): JSX.Element => (
    <button
      aria-label={className}
      disabled={disabled}
      className={className}
      ref={ref as RefObject<HTMLButtonElement>}
      onClick={onClick}
      type="button"
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none'
      }}
    >
      {children}
    </button>
  )
)

export default SwipiButton
