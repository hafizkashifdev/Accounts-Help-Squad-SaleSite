"use client";
import { termsOfServiceDocumentData } from "./TermsOfServiceDocument.data";

export const TermsOfServiceDocument = () => {
  return (
    <>
      {termsOfServiceDocumentData.map((x: any) => (
        <x.component {...x?.componentProps}>{x?.heading}</x.component>
      ))}
    </>
  );
};
