export interface ExpensesByCategory {
  salaries: number;
  services: number;
  supplies: number;
}

export interface Month {
  id: string;
  _id: string;
  month: string;
  nonOperationalExpenses: number;
  operationalExpenses: number;
  revenue: number;
  expenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;

  totalExpenses: number;
  totalRevenue: number;
  toatlProfit: number;

  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}
