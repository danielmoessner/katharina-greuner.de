import React, { useState, useRef } from "react";
import DynamicInput, { DynamicInputProps } from "./DynamicInput";
import Button from "./Button";
import Heading from "./Heading";
import { useForm, Controller } from "react-hook-form";
import { Switch } from "@headlessui/react";

const convertedFormEntries = (formData: FormData) =>
  Array.from(formData, ([key, value]) => [
    key,
    typeof value === "string" ? value : value.name,
  ]);

interface Props {
  fields: Omit<DynamicInputProps, "register" | "error">[];
  dataProtectionText?: string;
  name?: string;
  successHeading?: string;
  successText?: string;
  submitText?: string;
  showPrivacy?: boolean;
  gapY?: string;
  buttonDivClass?: string;
}

function DynamicForm({
  fields,
  dataProtectionText = "Ich stimme zu, dass meine Daten zum Bearbeiten dieser Anfrage vorrübergehend gespeichert werden.",
  name = "standardformular",
  successText = "Vielen Dank für deine Anfrage wir werden uns schnellstmöglich bei dir melden.",
  successHeading = "Vielen Dank",
  submitText = "Absenden",
  showPrivacy = true,
  gapY = "gap-y-6",
  buttonDivClass = "",
}: Props) {
  const [formSent, setFormSent] = useState(false);

  const form = useRef(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    // eslint-disable-next-line no-undef
    const formData = new FormData(form.current);
    // eslint-disable-next-line no-undef
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(convertedFormEntries(formData)).toString(),
    })
      .then(() => setFormSent(true))
      .catch((error) => {
        console.error("Form Error:", error);
        alert("Es ist leider ein Fehler passiert.");
      });
  };

  return (
    <div className="max-w-none">
      <div className={`${formSent ? "block" : "hidden"}`}>
        <div className="text-center">
          <Heading element="div" size="h3">
            {successHeading}
          </Heading>
          <p className="block w-full mt-2 text-center">{successText}</p>
        </div>
      </div>

      <div className={`${formSent ? "hidden" : "block"}`}>
        <form
          name={name}
          id={name}
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          data-netlify="true"
          noValidate
          className={`grid grid-cols-1 ${gapY} sm:grid-cols-2 sm:gap-x-8`}
        >
          <input type="hidden" name="form-name" value={name} />

          {fields.map((field) => (
            <DynamicInput
              key={field.name}
              {...field}
              error={errors[field.name] ? true : false}
              register={register}
            />
          ))}

          {showPrivacy && (
            <div className="sm:col-span-2">
              <Switch.Group>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Controller
                      control={control}
                      name="dataProtection"
                      defaultValue={false}
                      rules={{ required: "Zustimmung erforderlich." }}
                      render={({ field: { onChange, value } }) => (
                        <Switch
                          checked={value}
                          onChange={onChange}
                          className={`${
                            value ? "bg-kg-yellow" : "bg-kg-brown/40"
                          } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kg-yellow`}
                        >
                          <span
                            aria-hidden="true"
                            className={`${
                              value ? "translate-x-5" : "translate-x-0"
                            } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                          />
                        </Switch>
                      )}
                    />
                  </div>
                  <div className="ml-3">
                    <Switch.Label
                      className="text-base prose text-kg-brown"
                      dangerouslySetInnerHTML={{ __html: dataProtectionText }}
                    ></Switch.Label>
                  </div>
                </div>
              </Switch.Group>
              {errors.dataProtection && (
                <span className="block mt-1 text-sm font-bold text-red-600">
                  {errors.dataProtection.message}
                </span>
              )}
            </div>
          )}

          <div className={`sm:col-span-2 ${buttonDivClass}`}>
            <Button element="button" type="submit" ringOffset="white">
              {submitText}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DynamicForm;
