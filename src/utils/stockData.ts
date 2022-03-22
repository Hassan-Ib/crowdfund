export type Stock = {
  name: string;
  minimum: number;
  amountLeft: number;
  description: string;
  disabled?: boolean;
};

export const stockData: Array<Stock> = [
  {
    name: "bambo stand",
    minimum: 25,
    amountLeft: 101,
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and youll be added to a special Backer member list.`,
    disabled: false,
  },
  {
    name: "black edition stand",
    minimum: 75,
    amountLeft: 64,
    description: `You get a Black Special Edition computer stand and a personal thank you. Youll be added to our Backer member list. Shipping is included.`,
    disabled: false,
  },
  {
    name: "mahogany special edition",
    minimum: 200,
    amountLeft: 0,
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
    disabled: true,
  },
];
