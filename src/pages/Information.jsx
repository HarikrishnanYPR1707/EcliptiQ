import { DatePicker } from "@/components/ui/DatePicker";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Information = () => {
  const [sampleState, setSampleState] = useState({
    basicInformation: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      website: "",
      github: "",
      linkedin: "",
      twitter: "",
    },
    educationDetails: {
      college: "",
      collegeStartDate: "",
      collegeEndDate: "",
      courseName: "",
      schoolName: "",
      schoolStartDate: "",
      schoolEndDate: "",
      schoolScore: "",
    },
    experience: {
      experience1Organisation: "",
      experience1Position: "",
      experience1Duration: "",
      experience1Description: "",
      experience2Organisation: "",
      experience2Position: "",
      experience2Duration: "",
      experience2Description: "",
    },
    skills: {
      skill1: "",
      skill2: "",
      skill3: "",
      skill4: "",
      skill5: "",
      skill6: "",
    },
  });
  console.log(sampleState);
  return (
    <div className="mx-auto flex max-w-[900px] items-start justify-center py-4">
      <div className="w-full ">
        <h1 className="text-center text-[22px] font-black uppercase text-[#6d28d9] sm:text-4xl">
          Enter your information
        </h1>
        {/* Basic Information  */}
        <div className="mt-10">
          <h1 className="text-center text-xl font-black text-gray-300 underline lg:text-3xl ">
            Basic Information
          </h1>
          <div className="mt-4 grid grid-cols-1 justify-items-center gap-4  sm:grid-cols-2">
            <InputWithLabel
              label="First Name"
              type="text"
              placeholder="Enter your First Name..."
              required
              sectionName="basicInformation"
              inputName="firstName"
              setSampleState={setSampleState}
            />
            <InputWithLabel
              label="Last Name"
              type="text"
              placeholder="Enter your Last Name..."
              required
              sectionName="basicInformation"
              inputName="lastName"
              setSampleState={setSampleState}
            />
            <InputWithLabel
              label="Email"
              type="text"
              placeholder="Enter your Email..."
              required
              sectionName="basicInformation"
              inputName="email"
              setSampleState={setSampleState}
            />
            <InputWithLabel
              label="Phone Number"
              type="text"
              placeholder="Enter your Phone Number..."
              sectionName="basicInformation"
              inputName="phoneNumber"
              setSampleState={setSampleState}
            />
            <InputWithLabel
              label="Website"
              type="url"
              placeholder="Enter your Website..."
              sectionName="basicInformation"
              inputName="website"
              setSampleState={setSampleState}
            />
            <InputWithLabel
              label="Github"
              type="url"
              placeholder="Enter your Github..."
              sectionName="basicInformation"
              inputName="github"
              setSampleState={setSampleState}
            />
            <InputWithLabel
              label="LinkedIn"
              type="url"
              placeholder="Enter your LinkedIn..."
              sectionName="basicInformation"
              inputName="linkedin"
              setSampleState={setSampleState}
            />
            <InputWithLabel
              label="Twitter"
              type="url"
              placeholder="Enter your Twitter..."
              sectionName="basicInformation"
              inputName="twitter"
              setSampleState={setSampleState}
            />
          </div>
        </div>
        {/* Education Details */}
        <div className="mt-10">
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
                sectionName="educationDetails"
                inputName="college"
                setSampleState={setSampleState}
              />
              {/* <DatePicker text="Start Date" />
              <DatePicker text="End Date" /> */}
              <div className="w-full max-w-[340px]">
                <DatePicker
                  text="Start Date"
                  sectionName="educationDetails"
                  inputName="college"
                  setSampleState={setSampleState}
                />
              </div>
              <div className="w-full max-w-[340px]">
                <DatePicker text="End Date" />
              </div>
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
              {/* <DatePicker text="Start Date" />
              <DatePicker text="End Date" /> */}
              <div className="w-full max-w-[340px]">
                <DatePicker text="Start Date" />
              </div>
              <div className="w-full max-w-[340px]">
                <DatePicker text="End Date" />
              </div>
              <InputWithLabel
                label="Score"
                type="url"
                placeholder="Enter your score..."
              />
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="mt-10">
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
        <div className="mt-10">
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
