"use client";
import { privacyPolicyDocumentData } from "./PrivacyPolicyDocument.data";

export const PrivacyPolicyDocument = () => {
  return (
    <>
      {privacyPolicyDocumentData.map((x: any) => (
        <x.component {...x?.componentProps}>{x?.heading}</x.component>
      ))}
    </>
  );
};
