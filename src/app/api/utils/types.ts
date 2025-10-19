type Id = {
  id: string;
};

type PathParams = {
  params: Id;
};

export type NextPathParams = {
  params: Promise<Id>;
};
