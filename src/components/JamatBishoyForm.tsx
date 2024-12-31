"use client";

import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialFormData, validationSchema } from "@/app/data/JamatBishoyData";

const JamatBishoyForm: React.FC = () => {
  const handleSubmit = (
    values: typeof initialFormData,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Form Data:", values);
    resetForm();
  };

  // Form fields configuration to reduce redundancy
  const formFields = [
    { name: "Jamat", label: "জামাত বের হয়েছে", placeholder: "Enter value" },
    {
      name: "JamatSathi",
      label: "জামাতের মোট সাথী ছিল",
      placeholder: "Enter Value",
    },
    {
      name: "DawatProsikkhon",
      label: "দাওয়াত প্রশিক্ষণ কর্মশালার আয়োজন হয়েছে",
      placeholder: "Enter Value",
    },
    {
      name: "jamatBerHoise",
      label: "জামাত বের হয়েছে",
      placeholder: "Enter Value",
    },
    {
      name: "Sathi",
      label: "জামাতের মোট সাথী ছিল",
      placeholder: "Enter Value",
    },
    {
      name: "DhormoSova",
      label: "ধর্ম সবার আয়োজন হয়েছে",
      placeholder: "Enter Value",
    },
  ];

  return (
    <div className="mx-auto mt-8 w-full rounded bg-white p-10 shadow-lg">
      <h2 className="mb-6 text-2xl">জামাত বিষয়</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid grid-cols-2 gap-10">
            {formFields.map((field, index) => (
              <div key={index}>
                <label className="mb-2 block text-gray-700">
                  {field.label}
                </label>
                <Field
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
                />
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-500"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Button variant="ghost" size="default" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default JamatBishoyForm;
