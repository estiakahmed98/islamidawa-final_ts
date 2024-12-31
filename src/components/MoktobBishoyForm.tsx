"use client";

import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { initialFormData, validationSchema } from "@/app/data/MoktobBishoyData";

interface FormValues {
  MoktobChalu: string;
  MoktobAdmit: string;
  NewMoktob: string;
  Sikkha: string;
  TotalStudent: string;
  TotalSikkha: string;
  GurdianMeeting: string;
  TotalAgeSikkha: string;
  MadrasahAdmit: string;
  NewMuslim: string;
}

const MoktobBishoyForm: React.FC = () => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="w-full mx-auto mt-8 rounded bg-white p-10 shadow-lg">
      <h2 className="mb-6 text-2xl">মক্তব বিষয়</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label htmlFor="MoktobChalu" className="mb-2 block text-gray-700">
                এক মাসে নতুন মক্তব চালু হয়েছে
              </label>
              <Field
                id="MoktobChalu"
                name="MoktobChalu"
                placeholder="Enter value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="MoktobChalu"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label htmlFor="MoktobAdmit" className="mb-2 block text-gray-700">
                মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে
              </label>
              <Field
                id="MoktobAdmit"
                name="MoktobAdmit"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="MoktobAdmit"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <label htmlFor="NewMoktob" className="mb-2 block text-gray-700">
                নতুন পুরাতন মোট মক্তব চালু আছে
              </label>
              <Field
                id="NewMoktob"
                name="NewMoktob"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="NewMoktob"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label htmlFor="Sikkha" className="mb-2 block text-gray-700">
                এই মাসে বয়স্ক কোরআন শিক্ষা চালু হয়েছে
              </label>
              <Field
                id="Sikkha"
                name="Sikkha"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="Sikkha"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          {/* Repeat similar structures for remaining fields */}

          <div className="flex justify-end">
            <Button variant="secondary" size="default" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MoktobBishoyForm;
