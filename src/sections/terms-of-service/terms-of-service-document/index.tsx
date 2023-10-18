import { termsOfServiceDocumentData } from "./terms-of-service-document.data";

export const TermsOfServiceDocument = () => {
  return (
    <>
      {termsOfServiceDocumentData.map((x: any) => (
        <x.component key={x?.id} {...x?.componentProps}>
          {x?.heading}
        </x.component>
      ))}
    </>
  );
};
