export interface Animal {
  name: string;
  array: any[],
  method?: (id: number) => void  
}

// objects
export interface Person {
  id: number;
  name: string;
}

export interface Employe extends Person {
  legs: number;
}

export interface Customer extends Person {
  money: number;
}

// implements functions

export interface Life {
  getMoney: () => void;
  getHappiness: () => void
}

class Faith implements Life {
  name: string = "something";
  getMoney(): void {
    
  };

  getHappiness(): void {
    
  };
}



