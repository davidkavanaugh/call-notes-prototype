export class MultipleChoiceAnswer {
  id: number;
  title: string;
  remove: boolean;
  constructor(values: Object = {}) {
  Object.assign(this, values);
  }
  }
