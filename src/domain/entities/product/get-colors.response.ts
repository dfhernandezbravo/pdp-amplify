export type Color = {
  name: string;
  mainColor: string;
  code: [
    {
      codeName: string;
      name: string;
      hexCode: string;
    },
  ];
};

export type GetColors = {
  groupName: 'Tintometrico';
  name: 'colors';
  type: 'json';
  value: Color[];
};
