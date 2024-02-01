import { DatePicker } from "@/components/ui/DatePicker";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Information = () => {
  return (
    <div className="mx-auto flex max-w-[900px] items-start justify-center border border-white py-4">
      <div className="w-full border border-amber-500">
        <h1 className="text-center text-[22px] font-black uppercase text-[#6d28d9] sm:text-4xl">
          Enter your information
        </h1>
        {/* Basic Information  */}
        <div className="mt-4 border border-amber-500 ">
          <h1 className="text-xl font-black text-gray-300 underline">
            Basic Information
          </h1>
          <div className="mt-4 grid grid-cols-1 justify-items-center gap-4 border border-amber-500 sm:grid-cols-2">
            <InputWithLabel
              label="First Name"
              type="text"
              placeholder="Enter your First Name..."
              required
            />
            <InputWithLabel
              label="Last Name"
              type="text"
              placeholder="Enter your Last Name..."
              required
            />
            <InputWithLabel
              label="Email"
              type="text"
              placeholder="Enter your Email..."
              required
            />
            <InputWithLabel
              label="Phone Number"
              type="text"
              placeholder="Enter your Phone Number..."
            />
            <InputWithLabel
              label="Website"
              type="url"
              placeholder="Enter your Website..."
            />
            <InputWithLabel
              label="Github"
              type="url"
              placeholder="Enter your Github..."
            />
            <InputWithLabel
              label="LinkedIn"
              type="url"
              placeholder="Enter your LinkedIn..."
            />
            <InputWithLabel
              label="Twitter"
              type="url"
              placeholder="Enter your Twitter..."
            />
          </div>
        </div>
        {/* Education Details */}
        <div className="mt-4 border border-amber-500 ">
          <h1 className="text-xl font-black text-gray-300 underline">
            Education Details
          </h1>
          <div className="mt-4 border border-amber-500">
            {/* college section */}
            <div className="mb-4 mt-4 grid w-full grid-cols-1 items-center justify-items-center gap-4 border-b-2 pb-4 sm:grid-cols-2">
              <InputWithLabel
                label="College/University"
                type="url"
                placeholder="Enter your College/University..."
              />
              <DatePicker text="Start Date" />
              <DatePicker text="End Date" />
              <InputWithLabel
                label="Course Name"
                type="url"
                placeholder="Enter your course name..."
              />
            </div>

            {/* school section */}
            <div className="mb-4 mt-4 grid w-full grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-2">
              <InputWithLabel
                label="School"
                type="url"
                placeholder="Enter your School Name..."
              />
              <DatePicker text="Start Date" />
              <DatePicker text="End Date" />
              <InputWithLabel
                label="Score"
                type="url"
                placeholder="Enter your score..."
              />
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="mt-4 border border-amber-500 ">
          <h1 className="text-xl font-black text-gray-300 underline">
            Experience Section
          </h1>
          <div className="mt-4 border border-amber-500"></div>
        </div>
        <div className="mt-4 grid justify-items-center">
          <Button className="px-10 font-black uppercase">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
