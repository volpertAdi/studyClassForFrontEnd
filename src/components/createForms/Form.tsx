import React, { useState } from 'react';
import { TextField } from '@mui/material';
import * as S from './formsStyles';

//consts
import { SAVE_TEXT, STUDENT_FIELDS } from '../../consts/createFormConsts';

//types
import type { GenericFormProps } from '../../types/createFormsTypes';

const GenericForm = <T extends Record<string, any>>(props: GenericFormProps<T>) => {
  const [formData, setFormData] = useState<T>(props.initialValues);

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
      
      <S.ActionButton variant="contained" type="submit">
       {SAVE_TEXT}
      </S.ActionButton>
    </S.FormSection>
  );
};

export default GenericForm;