import React from 'react';
import { Control } from '_/atoms/form/control';
import { Group } from '_/atoms/form/group';
import { Label } from '_/atoms/form/label';

export type NormalProps = {
  label: React.ReactNode;
  type: string;
  placeholder: string;
  value: string[] | number | string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  controlId: string;
};

function Normal(props: NormalProps) {
  const {
    label, type, placeholder, value, onChange, controlId,
  } = props;
  return (
    <Group controlId={controlId}>
      <Label>{label}</Label>
      <Control
        isInvalid={false}
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Group>
  );
}

export default Normal;
