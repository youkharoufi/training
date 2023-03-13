import { useField } from 'formik';
import React from 'react';
import {Label, FormField, Input} from 'semantic-ui-react';

export default function MyTextInput({label, ...props}){

    const [field, meta] = useField(props);
    return(
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
            
        </FormField>
    )

}