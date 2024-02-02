import { DatePicker } from "@/components/ui/DatePicker";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Information = () => {
  return (
    <div className="mx-auto flex max-w-[900px] items-start justify-center py-4">
      <div className="w-full ">
        <h1 className="text-center text-[22px] font-black uppercase text-[#6d28d9] sm:text-4xl">
          Enter your information
        </h1>
        {/* Basic Information  */}
        <div className="mt-4  ">
          <h1 className="text-center text-xl font-black text-gray-300 underline lg:text-3xl">
            Basic Information
          </h1>
          <div className="mt-4 grid grid-cols-1 justify-items-center gap-4  sm:grid-cols-2">
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
        <div className="mt-4  ">
          <h1 className="text-center text-xl font-black text-gray-300 underline lg:text-3xl">
            Education Details
          </h1>
          <div className="mt-4 ">
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
        <div className="mt-4  ">
          <h1 className="text-center text-xl font-black text-gray-300 underline lg:text-3xl">
            Experience Section
          </h1>
          <div className="mt-4 ">
            <h1 className="mb-4 text-lg text-gray-300 underline">
              Experience 1
            </h1>
            <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
              <InputWithLabel
                label="Institute/Organisation"
                type="text"
                placeholder="Enter your Organisation Name..."
                required
              />
              <InputWithLabel
                label="Position"
                type="text"
                placeholder="Enter your Position..."
                required
              />
              <InputWithLabel
                label="Duration"
                type="text"
                placeholder="Enter your duration in that organisation..."
                required
              />
              <InputWithLabel
                label="Description"
                type="text"
                placeholder="Enter the description..."
                required
              />
            </div>
          </div>
          <div className="mt-4 ">
            <h1 className="mb-4 text-lg text-gray-300 underline">
              Experience 2
            </h1>
            <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
              <InputWithLabel
                label="Institute/Organisation"
                type="text"
                placeholder="Enter your Organisation Name..."
                required
              />
              <InputWithLabel
                label="Position"
                type="text"
                placeholder="Enter your Position..."
                required
              />
              <InputWithLabel
                label="Duration"
                type="text"
                placeholder="Enter your duration in that organisation..."
                required
              />
              <InputWithLabel
                label="Description"
                type="text"
                placeholder="Enter the description..."
                required
              />
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-4  ">
          <h1 className="text-center text-xl font-black text-gray-300 underline lg:text-3xl">
            Skills
          </h1>
          <div className="mt-4 grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
            <InputWithLabel
              label="Skill 1"
              type="text"
              placeholder="Enter skill 1..."
              required
            />
            <InputWithLabel
              label="Skill 2"
              type="text"
              placeholder="Enter skill 2..."
              required
            />
            <InputWithLabel
              label="Skill 3"
              type="text"
              placeholder="Enter skill 3..."
              required
            />
            <InputWithLabel
              label="Skill 4"
              type="text"
              placeholder="Enter skill 4..."
              required
            />
            <InputWithLabel
              label="Skill 5"
              type="text"
              placeholder="Enter skill 5..."
              required
            />
            <InputWithLabel
              label="Skill 6"
              type="text"
              placeholder="Enter skill 6..."
              required
            />
          </div>
        </div>
        <div className="mt-4 grid justify-items-center">
          <Button className="px-10 font-black uppercase">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
