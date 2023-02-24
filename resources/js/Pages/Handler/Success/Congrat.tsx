import React from "react";
import useTypedPage from "@/Hooks/useTypedPage";

export default function Congrat() {

    const message = useTypedPage().props;
    return (
        <>
        <div className="success-message"></div>
        </>
    )
}
