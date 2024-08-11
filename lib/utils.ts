import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import GDSCLogo from "../public/logos/gdsc.png";
import IEDCLogo from "../public/logos/iedc.png";
import IEEELogo from "../public/logos/ieee.png";
import MULNLogo from "../public/logos/mulearn.png";
import FOSSLogo from "../public/logos/foss.png";
import NSSLogo from "../public/logos/nss.png";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function resolveClubIcon(clb: string): any {
  return {
    "Google Developers Student Club - UCEK": GDSCLogo,
    "IEEE - UCEK" : IEEELogo,
    "Legacy IEDC - UCEK" : IEDCLogo,
    "μlearn - UCEK" : MULNLogo,
    "FOSS - UCEK": FOSSLogo,
    "NSS - UCEK": NSSLogo,

  }[clb];
}