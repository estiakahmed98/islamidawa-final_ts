"use client";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialFormData, validationSchema } from "@/app/data/DayeeBishoyData";

const DayeeBishoyForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="mx-auto mt-8 w-full rounded bg-white p-10 shadow-lg">
      <h2 className="mb-6 text-2xl">দায়ী বিষয়</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                নতুন সহযোগী দায়ী তৈরি হয়েছে
              </label>
              <Field
                name="SohojogiDayee"
                placeholder="Enter value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="SohojogiDayee"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                দায়ী প্রশিক্ষণ কর্মশালার আয়োজন হয়েছে
              </label>
              <Field
                name="TrainingWorkshop"
                placeholder="Enter value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="TrainingWorkshop"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                দায়ী প্রশিক্ষণে অংশগ্রহণ করেছে
              </label>
              <Field
                name="Participants"
                placeholder="Enter value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="Participants"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                মাসিক দায়ী মজলিসে আলোচনা হয়েছে
              </label>
              <Field
                name="MonthlyMajlis"
                placeholder="Enter value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="MonthlyMajlis"
                component="div"
                className="text-red-500"
              />
            </div>
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

export default DayeeBishoyForm;
