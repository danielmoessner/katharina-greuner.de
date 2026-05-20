import React from "react";
import Button from "./Button";
import footer from "../content/setting/footer.json";

type LegacyField = {
  label?: string;
  name?: string;
  className?: string;
};

interface Props {
  // Legacy props (kept so content/config doesn't have to change)
  fields: LegacyField[];
  dataProtectionText?: string;
  name?: string;
  successHeading?: string;
  successText?: string;
  submitText?: string;
  showPrivacy?: boolean;
  gapY?: string;
  buttonDivClass?: string;

  // New props
  mailto?: string;
  email?: string;
  subject?: string;
  body?: string;
  buttonSize?: string;
}

function DynamicForm({
  // legacy (intentionally unused)
  fields,
  dataProtectionText,
  successText,
  successHeading,
  showPrivacy,
  gapY,

  name = "standardformular",
  submitText = "E-Mail schreiben",
  buttonDivClass = "flex justify-center",

  mailto,
  email,
  subject,
  body,
  buttonSize,
}: Props) {
  const defaultMailtoFromFooter = () => {
    for (const column of footer?.columns ?? []) {
      for (const item of column?.content ?? []) {
        if (
          item?.type === "link" &&
          typeof item?.href === "string" &&
          item.href.toLowerCase().startsWith("mailto:")
        ) {
          return item.href;
        }
      }
    }
    return "mailto:kala@katharina-greuner.de";
  };

  const baseMailto = mailto || (email ? `mailto:${email}` : defaultMailtoFromFooter());

  const resolvedSubject =
    subject ||
    (name.includes("newsletter")
      ? "Newsletter"
      : name.includes("kommentar")
        ? "Kommentar"
        : "Kontakt");

  const query = new URLSearchParams();
  if (resolvedSubject) query.set("subject", resolvedSubject);
  if (body) query.set("body", body);
  const href = query.toString() ? `${baseMailto}?${query.toString()}` : baseMailto;

  return (
    <div className="max-w-none">
      <div className={`sm:col-span-2 ${buttonDivClass}`}>
        <Button
          element="a"
          href={href}
          target="_self"
          ringOffset="white"
          size={buttonSize}
        >
          {submitText}
        </Button>
      </div>
    </div>
  );
}

export default DynamicForm;
