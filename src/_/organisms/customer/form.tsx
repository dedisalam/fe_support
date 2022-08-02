import React, { useEffect } from 'react';
import { Button, FloatingLabel, Form as FormBootstrap } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { ENDPOINT, GetPost } from '_/pages/customer/function';

type FormProps = {
  onSubmit: (value: any) => void;
  isMutate: boolean;
  data?: {
    name: string;
    profile: {
      id: number;
      name: string;
    }[];
  };
};

function Form(props: FormProps) {
  // const { onSubmit, isMutate, data } = props;
  // const {
  //   register, formState: { errors }, handleSubmit, setValue,
  // } = useForm();
  // const {
  //   data: response, isSuccess,
  // } = useQuery(ENDPOINT, GetPost);

  // const name = register('name', {
  //   required: 'Name is required',
  // });

  // useEffect(() => {
  //   if (data) {
  //     setValue('name', data.name);
  //   }
  // }, [data]);

  // if (isSuccess) {
  //   const formData = response.data.data;
  //   return (
  //     <FormBootstrap>
  //       <fieldset disabled={isMutate}>
  //         <FormBootstrap.Group controlId="Profile">
  //           <FloatingLabel
  //             controlId="Profile"
  //             label="Profile *"
  //             className="mb-3"
  //           >
  //             <FormBootstrap.Select aria-label="Profile">
  //               <option>-</option>
  //               {formData.profile.map((item) => (
  //                 <option key={item.id} value={item.id}>{item.name}</option>
  //               ))}
  //             </FormBootstrap.Select>
  //           </FloatingLabel>
  //         </FormBootstrap.Group>

  //         <FormBootstrap.Group controlId="Name">
  //           <FloatingLabel
  //             controlId="Name"
  //             label="Name *"
  //             className="mb-3"
  //           >
  //             <FormBootstrap.Control
  //               isInvalid={!!errors.name}
  //               type="text"
  //               placeholder="Name"
  //               name={name.name}
  //               ref={name.ref}
  //               onChange={name.onChange}
  //               onBlur={name.onBlur}
  //             />
  //             {errors.name && (
  //             <FormBootstrap.Control.Feedback type="invalid">
  //               {errors.name.message.toString()}
  //             </FormBootstrap.Control.Feedback>
  //             )}
  //           </FloatingLabel>
  //         </FormBootstrap.Group>

  //         <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
  //           {isMutate ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : null}
  //           {isMutate ? ' Loading…' : 'Save'}
  //         </Button>
  //       </fieldset>
  //     </FormBootstrap>
  //   );
  // }
  return <div>Loading...</div>;
}

Form.defaultProps = {
  data: {},
};

export default Form;
