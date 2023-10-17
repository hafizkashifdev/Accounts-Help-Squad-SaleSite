import { privacyPolicyDocumentData } from "./PrivacyPolicyDocument.data";

export const PrivacyPolicyDocument = () => {
  return (
    <>
      {privacyPolicyDocumentData.map((x: any) => (
        <x.component key={x?.id} {...x?.componentProps}>
          {x?.heading}
        </x.component>
      ))}
    </>
  );
};
