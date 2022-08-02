import React, { useEffect } from 'react';
import { Button, FloatingLabel, Form as FormBootstrap } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

type FormProps = {
  onSubmit: (value: any) => void;
  isMutate: boolean;
  data?: {
    name: string;
    cir: string;
    desc: string;
  }
};

function Form(props: FormProps) {
  const { onSubmit, isMutate, data } = props;
  const {
    register, formState: { errors }, handleSubmit, setValue,
  } = useForm();

  const name = register('name', {
    required: 'Name is required',
  });
  const cir = register('cir', {
    required: 'CIR is required',
  });
  const desc = register('desc', {
    required: 'Description is required',
  });

  useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('cir', data.cir);
      setValue('desc', data.desc);
    }
  }, [data]);

  return (
    <FormBootstrap>
      <fieldset disabled={isMutate}>
        <FormBootstrap.Group controlId="Name">
          <FloatingLabel
            controlId="Name"
            label="Name *"
            className="mb-3"
          >
            <FormBootstrap.Control
              isInvalid={!!errors.name}
              type="text"
              placeholder="Name"
              name={name.name}
              ref={name.ref}
              onChange={name.onChange}
              onBlur={name.onBlur}
            />
            {errors.name && (
            <FormBootstrap.Control.Feedback type="invalid">
              {errors.name.message.toString()}
            </FormBootstrap.Control.Feedback>
            )}
          </FloatingLabel>
        </FormBootstrap.Group>

        <FormBootstrap.Group controlId="Cir">
          <FloatingLabel
            controlId="Cir"
            label="Cir *"
            className="mb-3"
          >
            <FormBootstrap.Control
              isInvalid={!!errors.cir}
              type="text"
              placeholder="Cir"
              name={cir.name}
              ref={cir.ref}
              onChange={cir.onChange}
              onBlur={cir.onBlur}
            />
            {errors.cir && (
            <FormBootstrap.Control.Feedback type="invalid">
              {errors.cir.message.toString()}
            </FormBootstrap.Control.Feedback>
            )}
          </FloatingLabel>
        </FormBootstrap.Group>

        <FormBootstrap.Group controlId="Desc">
          <FloatingLabel
            controlId="Desc"
            label="Description *"
            className="mb-3"
          >
            <FormBootstrap.Control
              isInvalid={!!errors.desc}
              type="text"
              placeholder="Description"
              name={desc.name}
              ref={desc.ref}
              onChange={desc.onChange}
              onBlur={desc.onBlur}
            />
            {errors.desc && (
            <FormBootstrap.Control.Feedback type="invalid">
              {errors.desc.message.toString()}
            </FormBootstrap.Control.Feedback>
            )}
          </FloatingLabel>
        </FormBootstrap.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
          {isMutate ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : null}
          {isMutate ? ' Loading…' : 'Save'}
        </Button>
      </fieldset>
    </FormBootstrap>
  );
}

Form.defaultProps = {
  data: {},
};

export default Form;
