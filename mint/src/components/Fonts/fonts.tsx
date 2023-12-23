import { Inter } from 'next/font/google'
import { Lusitana } from 'next/font/google'
import { Montserrat } from 'next/font/google'
{/*To add fonts import the exported fonts and add the className property E.G calssName = inter.className */}
export const inter = Inter({weight:["400","700"], subsets:["greek-ext","latin"]});
export const lusi = Lusitana(
    {weight:["400","700"], subsets:["latin"]}
);
export const mont = Montserrat({weight:["400","700","900"], subsets:["cyrillic","latin","latin-ext","cyrillic-ext"]})