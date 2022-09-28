import React from "react";

const Input = React.forwardRef(
  (
    {
      onChange,
      label,
      value = "",
      id,
      error = "",
      classes = "",
      ...atr
    },
    ref
  ) => {
    return (
      <div className="h-full w-full z-10 flex flex-col">
        <label className="truncate mb-1" htmlFor={id}>
          {label}
        </label>
        <input
          className={`${classes} py-2.5 px-2 transition placeholder:text-gray-500  shadow-3xl-extend rounded-md border  focus:outline-none ${
            error ? "border-red-500" : "focus:border-main border-transparent"
          }`}
          ref={ref}
          onChange={onChange}
          id={id}
          {...atr}
        />
        <p className="text-red-600 text-xs pt-[3px]">{error}</p>
      </div>
    );
  }
);

export default Input;
