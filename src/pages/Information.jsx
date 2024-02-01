import { InputWithLabel } from "@/components/ui/InputWithLabel";

const Information = () => {
  return (
    <div className="mx-auto flex h-heightWithoutNavbar max-w-[900px] items-start justify-center border border-white py-4">
      <div className="w-full border border-amber-500">
        <h1 className="border border-amber-500 text-center text-[22px] font-black uppercase text-[#6d28d9] sm:text-4xl">
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
      </div>
    </div>
  );
};

export default Information;
