import React, { useState } from "react";
import { Icon, Button, Input } from "..";
import classNames from "classnames";

const NumberSpinner = ({ max, min, step, variant, defaultValue, inputClassName }) => {
  const [value, setValue] = useState(defaultValue);
  const addVal = (n) => {
    if (value !== max) {
      if (step) {
        n = step;
      }
      setValue(value + n);
    }
  };
  const reduceVal = (n) => {
    if (value > 0 && value !== min) {
      if (step) {
        n = step;
      }
      setValue(value - n);
    }
  };

  const inputClass = classNames({
    "relative z-10 text-center block flex-grow box-border text-sm leading-4.5 px-4 py-1.5 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-900 outline-none focus:border-primary-500 focus:outline-offset-0 focus:dark:outline-primary-950 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed first:rounded-s last:rounded-e transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none":true,
    [`${inputClassName}`]:inputClassName
  })
  return (
    <>
    <Input.Group>
      <Button
        icon
        size="rg"
        variant={variant}
        disabled={value < min ? true : false}
        onClick={() => reduceVal(1)}
      >
        <Icon name="minus"></Icon>
      </Button>
      <input
        type="number"
        className={inputClass}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        max={max}
        min={min}
      />
      <Button
        icon
        size="rg"
        variant={variant}
        disabled={value > max ? true : false}
        onClick={() => addVal(1)}
      >
        <Icon name="plus"></Icon>
      </Button>
    </Input.Group>
    </>
  );
};

export default NumberSpinner;
