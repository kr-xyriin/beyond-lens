import type {ReactNode} from 'react';import {Link} from 'react-router-dom';
export function Page({title,subtitle,children}:{title:string;subtitle:string;children:ReactNode}){return <section className="section"><div className="section-head"><div><span className="eyebrow">CampusClarity</span><h2 style={{marginTop:16}}>{title}</h2><p className="section-sub">{subtitle}</p></div></div>{children}</section>}
export function Info({title,children}:{title:string;children:ReactNode}){return <div className="panel"><h3>{title}</h3><p>{children}</p></div>}
export function Action({to,children,primary=false}:{to:string;children:ReactNode;primary?:boolean}){return <Link className={primary?'primary':'secondary'} to={to}>{children}</Link>}
