import React, {useEffect, useState} from 'react';

const Input = (props) => {
  const [innerValue, setInnerValue] = useState('')
  // 判断是否可控
  const isControl = function() {
    return 'value' in props;
  };

  const value = function() {
    if (isControl()) {
      return props.value;
    } else {
      return innerValue;
    }
  };

  useEffect(() => {
    // 初始化为 defaultValue
    setInnerValue(props.defaultValue);
    return () => {
    }
  }, [props.defaultValue]);

  return (
    <input
      value = {
        value()
      }
      onChange = {
        (e) => {
          if (!isControl()) {
            setInnerValue(e.target.value);
          }
          props.onChange(e)
        }
      }
    />
  )
};
export default Input;
