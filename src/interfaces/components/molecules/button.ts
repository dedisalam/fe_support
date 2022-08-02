export type ButtonAdd = {
  href: string;
};

export type ButtonEdit = {
  href: string;
};

export type ButtonSave = {
  isLoading: boolean;
};

export type ButtonLogin = {
  isLoading: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
