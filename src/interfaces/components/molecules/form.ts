import type { FieldValues, FormState, UseFormRegisterReturn } from 'react-hook-form';

export type FormGroupText = {
  controlId: string;
  label: string;
  error: FormState<FieldValues>['errors'];
  control: UseFormRegisterReturn;
};

export type FormGroupEmail = {
  controlId: string;
  label: string;
  error: FormState<FieldValues>['errors'];
  control: UseFormRegisterReturn;
};

export type FormGroupPassword = {
  controlId: string;
  label: string;
  error: FormState<FieldValues>['errors'];
  control: UseFormRegisterReturn;
};
