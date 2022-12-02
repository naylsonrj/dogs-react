import React from 'react'

//  validação
const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preecha um email válido'
  }
}


const useForm = (type) => {

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  function validate(value){
    if(types === false) return true;
    if(value.lenght === 0) {
      setError('Preencha um valor!')
      return false;
    }else if (types[type] && !types[type].regex.test(value)){
      setError(types[type].message)
    } else {
      setError(null)
      return true;
    }
  }

  function onChange({target}) {
    if(error)validate(target.value);
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm