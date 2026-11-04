export type Senior = { name:string; branch:string; year:string; topics:string; price:number };
export const seniors:Senior[] = [
  {name:'Sample Senior A',branch:'B.Tech CSE',year:'3rd year',topics:'Academics · Campus life',price:249},
  {name:'Sample Senior B',branch:'BBA',year:'2nd year',topics:'Hostels · Student clubs',price:249},
  {name:'Sample Senior C',branch:'B.Tech',year:'4th year',topics:'Internships · Career advice',price:249},
];
export type Booking = {id:string; seniorId:number; name:string; duration:number; slot:string};
