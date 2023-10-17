import { termsOfServiceDocumentData } from "./TermsOfServiceDocument.data";

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
