export type Form = {
  children: React.ReactNode | React.ReactNode[];
};

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;
export type FormControl = {
  isInvalid?: boolean;
  type?: string;
  placeholder?: string;
  name?: string;
  controlRef?: React.Ref<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<FormControlElement>;
  onBlur?: React.FocusEventHandler<FormControlElement>;
};

type FeedbackType = 'invalid' | 'valid';
export type FormControlFeedback = {
  children: React.ReactNode | React.ReactNode[];
  type: FeedbackType;
};

export type FormFloatingLabel = {
  children: React.ReactNode | React.ReactNode[];
  controlId: string;
  label: string;
};

export type FormGroup = {
  children: React.ReactNode | React.ReactNode[];
  controlId: string;
};
