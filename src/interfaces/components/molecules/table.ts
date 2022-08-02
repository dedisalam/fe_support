export type Table = {
  data: [{
    [key: string]: number | string;
  }];
};

export type TableStriped = {
  data: [
    { [key: string]: number | string },
  ];
};
