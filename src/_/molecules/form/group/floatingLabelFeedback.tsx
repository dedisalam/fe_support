import React from 'react';
import { Control } from '_/atoms/form/control';
import { Feedback } from '_/atoms/form/control/feedback';
import { Group } from '_/atoms/form/group';
import { Floating } from '_/atoms/form/label';

export type FloatingLabelFeedbackProps = {
  label: React.ReactNode;
  type: string;
  placeholder: string;
  value: string[] | number | string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  controlId: string;
  required: boolean;
  isInvalid: boolean;
  children: React.ReactNode;
};

function FloatingLabelFeedback(props: FloatingLabelFeedbackProps) {
  const {
    label, type, placeholder, value, onChange, controlId, required, isInvalid, children,
  } = props;
  return (
    <Group controlId={controlId}>
      <Floating
        controlId={controlId}
        label={label}
      >
        <Control
          isInvalid={isInvalid}
          required={required}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Floating>
      <Feedback>{children}</Feedback>
    </Group>
  );
}

export default FloatingLabelFeedback;
