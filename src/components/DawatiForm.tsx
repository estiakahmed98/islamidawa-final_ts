"use client";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialFormData, validationSchema } from "@/app/data/DawatiData";

const DawatiForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="w-full mx-auto mt-8 rounded bg-white p-10 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">দাওয়াতি বিষয়</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label
                htmlFor="DawatMojlish"
                className="block mb-2 text-gray-700"
              >
                দাওয়াতের গুরুত্ব ও প্রয়োজনীয়তা নিয়ে মজলিস হয়েছে
              </label>
              <Field
                id="DawatMojlish"
                name="DawatMojlish"
                placeholder="Enter number of meetings"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="DawatMojlish"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="DawatGurutto"
                className="block mb-2 text-gray-700"
              >
                দাওয়াতের গুরুত্ব ও প্রয়োজনীয়তা মজলিসে মোট অংশগ্রহণ
              </label>
              <Field
                id="DawatGurutto"
                name="DawatGurutto"
                placeholder="Enter total participants"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="DawatGurutto"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label
                htmlFor="DawatProsikkhon"
                className="block mb-2 text-gray-700"
              >
                দাওয়াত প্রশিক্ষণ কর্মশালার আয়োজন হয়েছে
              </label>
              <Field
                id="DawatProsikkhon"
                name="DawatProsikkhon"
                placeholder="Enter number of workshops"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="DawatProsikkhon"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="DawatKormosala"
                className="block mb-2 text-gray-700"
              >
                দাওয়াত প্রশিক্ষণ কর্মশালায় মোট অংশগ্রহণ
              </label>
              <Field
                id="DawatKormosala"
                name="DawatKormosala"
                placeholder="Enter total participants"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="DawatKormosala"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label
                htmlFor="JumarMojlish"
                className="block mb-2 text-gray-700"
              >
                জুমার মজলিসে আলোচনা হয়েছে
              </label>
              <Field
                id="JumarMojlish"
                name="JumarMojlish"
                placeholder="Enter number of discussions"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="JumarMojlish"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label htmlFor="DhormoSova" className="block mb-2 text-gray-700">
                ধর্ম সবার আয়োজন হয়েছে
              </label>
              <Field
                id="DhormoSova"
                name="DhormoSova"
                placeholder="Enter number of events"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="DhormoSova"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button variant="secondary" size="default" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DawatiForm;
