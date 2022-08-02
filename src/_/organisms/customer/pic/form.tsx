import React, { useEffect } from 'react';
import { Button, FloatingLabel, Form as FormBootstrap } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

type FormProps = {
  onSubmit: (value: any) => void;
  isMutate: boolean;
  data?: {
    name?: string;
  }
};

function Form(props: FormProps) {
  // const { onSubmit, isMutate, data } = props;
  // const {
  //   register, formState: { errors }, handleSubmit, setValue,
  // } = useForm();

  // const name = register('name', {
  //   required: 'Name is required',
  // });

  // useEffect(() => {
  //   if (data) {
  //     setValue('name', data.name);
  //   }
  // }, [data]);

  // return (
  //   <FormBootstrap>
  //     <fieldset disabled={isMutate}>
  //       <FormBootstrap.Group controlId="Name">
  //         <FloatingLabel
  //           controlId="Name"
  //           label="Name *"
  //           className="mb-3"
  //         >
  //           <FormBootstrap.Control
  //             isInvalid={!!errors.name}
  //             type="text"
  //             placeholder="Name"
  //             name={name.name}
  //             ref={name.ref}
  //             onChange={name.onChange}
  //             onBlur={name.onBlur}
  //           />
  //           {errors.name && (
  //           <FormBootstrap.Control.Feedback type="invalid">
  //             {errors.name.message.toString()}
  //           </FormBootstrap.Control.Feedback>
  //           )}
  //         </FloatingLabel>
  //       </FormBootstrap.Group>

  //       <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
  //         {isMutate ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : null}
  //         {isMutate ? ' Loading…' : 'Save'}
  //       </Button>
  //     </fieldset>
  //   </FormBootstrap>
  // );
  return <div>Loading ...</div>;
}

Form.defaultProps = {
  data: {},
};

export default Form;
