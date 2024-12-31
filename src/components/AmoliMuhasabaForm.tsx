"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import {
  ayatOptions,
  initialFormData,
  validationSchema,
  zikirOptions,
  ishraqOptions,
} from "@/app/data/AmoliMuhasabaFormData";

type FormValues = typeof initialFormData;

const AmoliMuhasabaForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="mx-auto mt-8 w-full rounded bg-white p-10 shadow-lg">
      <h2 className="mb-6 text-2xl">আ’মলি মুহাসাবা</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={async (
          values: FormValues,
          { resetForm }: FormikHelpers<FormValues>
        ) => {
          setIsSubmitting(true);
          try {
            const response = await fetch("/api/amoli", {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (response.ok) {
              resetForm();
              router.push("/dashboard");
              alert("Form submitted successfully!");
            } else {
              alert("Form submission failed! Try again.");
            }
          } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* First Row */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label htmlFor="tahajjud" className="mb-2 block text-gray-700">
                  তাহাজ্জুদ
                </label>
                <Field
                  id="tahajjud"
                  name="tahajjud"
                  placeholder="কত রাকাত"
                  className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
                  aria-label="তাহাজ্জুদ রাকাত সংখ্যা"
                />
                <ErrorMessage
                  name="tahajjud"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="ayat" className="mb-2 block text-gray-700">
                  তিলাওয়াতুল কোরআন তাদাব্বুর
                </label>
                <Field
                  id="ayat"
                  as="select"
                  name="ayat"
                  className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
                  aria-label="তিলাওয়াতুল কোরআন সূরা নির্বাচন"
                >
                  <option value="">Select Sura</option>
                  {ayatOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="ayat"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label htmlFor="zikir" className="mb-2 block text-gray-700">
                  সকাল-সন্ধ্যা দোয়া ও জিকির
                </label>
                <Field
                  id="zikir"
                  as="select"
                  name="zikir"
                  className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
                  aria-label="সকাল-সন্ধ্যা দোয়া ও জিকির নির্বাচন"
                >
                  <option value="">Select Time</option>
                  {zikirOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="zikir"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="ishraq" className="mb-2 block text-gray-700">
                  ইশরাক-আওয়াবীন-চাশ্ত
                </label>
                <Field
                  id="ishraq"
                  as="select"
                  name="ishraq"
                  className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
                  aria-label="ইশরাক, আওয়াবীন এবং চাশ্ত নির্বাচন"
                >
                  <option value="">Select Option</option>
                  {ishraqOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="ishraq"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <Button
                variant="ghost"
                size="default"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AmoliMuhasabaForm;
