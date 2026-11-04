import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import type {Booking} from '../data/seniors';
type Theme='light'|'dark';
type State={theme:Theme;toggleTheme:()=>void;signedIn:boolean;signIn:()=>void;signOut:()=>void;bookings:Booking[];addBooking:(booking:Booking)=>void;cancelBooking:(id:string)=>void;saved:number[];toggleSaved:(id:number)=>void;notify:(message:string)=>void};
const Context=createContext<State|null>(null);
export function AppProvider({children}:{children:ReactNode}){
 const [theme,setTheme]=useState<Theme>(()=>{try{return localStorage.getItem('cc-theme')==='dark'?'dark':'light'}catch{return 'light'}});
 const [signedIn,setSignedIn]=useState(false);const [bookings,setBookings]=useState<Booking[]>([]);const [saved,setSaved]=useState<number[]>([]);const [toast,setToast]=useState('');
 useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('cc-theme',theme)}catch{}},[theme]);
 useEffect(()=>{if(!toast)return;const timer=window.setTimeout(()=>setToast(''),3200);return()=>window.clearTimeout(timer)},[toast]);
 return <Context.Provider value={{theme,toggleTheme:()=>setTheme(v=>v==='light'?'dark':'light'),signedIn,signIn:()=>setSignedIn(true),signOut:()=>setSignedIn(false),bookings,addBooking:b=>setBookings(v=>[...v,b]),cancelBooking:id=>setBookings(v=>v.filter(b=>b.id!==id)),saved,toggleSaved:id=>setSaved(v=>v.includes(id)?v.filter(i=>i!==id):[...v,id]),notify:setToast}}>{children}<div className={'toast'+(toast?' show':'')} role="status" aria-live="polite">{toast}</div></Context.Provider>;
}
export function useApp(){const state=useContext(Context);if(!state)throw new Error('AppProvider missing');return state}
