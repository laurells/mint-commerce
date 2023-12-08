import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import TopNav from "./TopNav";
import styles from "./Header.module.css";
type Props = {
    title?: string;
  };
const Header: React.FC<Props> = ({ title }) => {
    return (
        <>
            {/* ===== Top Navigation ===== */}
            <TopNav />
        </>
    )
}

export default Header;