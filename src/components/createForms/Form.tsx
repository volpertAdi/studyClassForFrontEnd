import React, { useState } from 'react';
import { TextField } from '@mui/material';
import * as S from './formsStyles';

//consts
import { SAVE_TEXT } from '../../consts/createFormConsts';

//types
import type { GenericFormProps } from '../../types/createFormsTypes';

//context
import { useAppTheme } from '../../context/ThemeContext/ThemeContext';

const GenericForm = <T extends Record<string, any>>(props: GenericFormProps<T>) => {
  const [formData, setFormData] = useState<T>(props.initialValues);
  const {mainColor } = useAppTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSave(formData)
  };

  return (
    <S.FormSection onSubmit={handleSubmit}>
      <S.FormTitle variant="h4">{props.title}</S.FormTitle>

      {props.fields.map((field) => (
        <TextField 
          key={String(field.name)}        
          name={String(field.name)}            
          label={field.label}        
          type={field.type ?? 'text'} 
          required={field.required}
          fullWidth 
          value={formData[field.name as keyof T]} 
          onChange={handleChange} 
        />
      ))}
      
      <S.ActionButton variant="contained" type="submit" mainColor={mainColor}>
       {SAVE_TEXT}
      </S.ActionButton>
    </S.FormSection>
  );
};

export default GenericForm;