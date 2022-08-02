import React, { useEffect } from 'react';
import { Button, FloatingLabel, Form as FormBootstrap } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

type FormProps = {
  onSubmit: (value: any) => void;
  isMutate: boolean;
  data?: {
    name: string;
    address: string;
    telp: string;
    hp: string;
    fax: string;
  };
};

function Form(props: FormProps) {
  // const { onSubmit, isMutate, data } = props;
  // const {
  //   register, formState: { errors }, handleSubmit, setValue,
  // } = useForm();

  // const name = register('name', {
  //   required: 'Name is required',
  // });
  // const address = register('address', {
  //   required: 'Address is required',
  // });
  // const telp = register('telp', {
  //   required: 'Phone number is required',
  //   pattern: {
  //     value: /^(\+62|62|0)([2-7]|9)\d(\d)?[2-9](\d){6,7}$/,
  //     message: 'invalid phone number',
  //   },
  // });
  // const hp = register('hp', {
  //   required: 'Handphone is required',
  //   pattern: {
  //     value: /^(\+62|62|0)8[1-9][0-9]{6,9}$/,
  //     message: 'invalid handphone number',
  //   },
  // });
  // const fax = register('fax', {
  //   required: 'Fax is required',
  //   pattern: {
  //     value: /^(\+62|62|0)([2-7]|9)\d(\d)?[2-9](\d){6,7}$/,
  //     message: 'invalid fax number',
  //   },
  // });

  // useEffect(() => {
  //   if (data) {
  //     setValue('name', data.name);
  //     setValue('address', data.address);
  //     setValue('telp', data.telp);
  //     setValue('hp', data.hp);
  //     setValue('fax', data.fax);
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

  //       <FormBootstrap.Group controlId="Address">
  //         <FloatingLabel
  //           controlId="Address"
  //           label="Address *"
  //           className="mb-3"
  //         >
  //           <FormBootstrap.Control
  //             isInvalid={!!errors.address}
  //             type="text"
  //             placeholder="Address"
  //             name={address.name}
  //             ref={address.ref}
  //             onChange={address.onChange}
  //             onBlur={address.onBlur}
  //           />
  //           {errors.address && (
  //           <FormBootstrap.Control.Feedback type="invalid">
  //             {errors.address.message.toString()}
  //           </FormBootstrap.Control.Feedback>
  //           )}
  //         </FloatingLabel>
  //       </FormBootstrap.Group>

  //       <FormBootstrap.Group controlId="Telp">
  //         <FloatingLabel
  //           controlId="Telp"
  //           label="Phone *"
  //           className="mb-3"
  //         >
  //           <FormBootstrap.Control
  //             isInvalid={!!errors.telp}
  //             type="text"
  //             placeholder="Phone"
  //             name={telp.name}
  //             ref={telp.ref}
  //             onChange={telp.onChange}
  //             onBlur={telp.onBlur}
  //           />
  //           {errors.telp && (
  //           <FormBootstrap.Control.Feedback type="invalid">
  //             {errors.telp.message.toString()}
  //           </FormBootstrap.Control.Feedback>
  //           )}
  //         </FloatingLabel>
  //       </FormBootstrap.Group>

  //       <FormBootstrap.Group controlId="Hp">
  //         <FloatingLabel
  //           controlId="Hp"
  //           label="Handphone *"
  //           className="mb-3"
  //         >
  //           <FormBootstrap.Control
  //             isInvalid={!!errors.hp}
  //             type="text"
  //             placeholder="Handphone"
  //             name={hp.name}
  //             ref={hp.ref}
  //             onChange={hp.onChange}
  //             onBlur={hp.onBlur}
  //           />
  //           {errors.hp && (
  //           <FormBootstrap.Control.Feedback type="invalid">
  //             {errors.hp.message.toString()}
  //           </FormBootstrap.Control.Feedback>
  //           )}
  //         </FloatingLabel>
  //       </FormBootstrap.Group>

  //       <FormBootstrap.Group controlId="Fax">
  //         <FloatingLabel
  //           controlId="Fax"
  //           label="Fax *"
  //           className="mb-3"
  //         >
  //           <FormBootstrap.Control
  //             isInvalid={!!errors.fax}
  //             type="text"
  //             placeholder="Fax"
  //             name={fax.name}
  //             ref={fax.ref}
  //             onChange={fax.onChange}
  //             onBlur={fax.onBlur}
  //           />
  //           {errors.fax && (
  //           <FormBootstrap.Control.Feedback type="invalid">
  //             {errors.fax.message.toString()}
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
