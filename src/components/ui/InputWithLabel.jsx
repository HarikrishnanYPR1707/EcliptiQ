import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel({
  label,
  type,
  setSampleState,
  sectionName,
  placeholder,
  inputName,
  ...props
}) {
  return (
    <div className="grid w-full max-w-[340px] items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input
        type={type}
        id="email"
        placeholder={placeholder}
        sectionName={sectionName}
        inputName={inputName}
        setSampleState={setSampleState}
        {...props}
      />
    </div>
  );
}
