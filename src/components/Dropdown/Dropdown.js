import React from 'react'
import Select from 'react-select'
import './Dropdown.scss'

const Dropdown = React.forwardRef(
  (
    {
      placeholder = '',
      label = '',
      id,
      name,
      error,
      onChange,
      options = [],
      value,
    },
    ref
  ) => {
    const onChangeHandler = (e) => {
      const val = e.value
      onChange(val)
    }

    return (
      <div className='w-full'>
          <label htmlFor={id} className='mb-1 inline-block'>
            {label}
          </label>
        <Select
          classNamePrefix='custom-select_container'
          className={` ${error ? 'error' : ''} custom-select`}
          placeholder={placeholder}
          instanceId={id}
          ref={ref}
          onChange={onChangeHandler}
          options={options}
          name={name}
          value={value?.value}
        />
        <p className='text-red-600 text-xs pt-[3px]'>{error}</p>
      </div>
    )
  }
)

export default Dropdown
