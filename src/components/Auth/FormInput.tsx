import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormDataType } from "./Signup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputFieldProps = {
  label: string;
  id: keyof FormDataType;
  type?: string;
  disabled?: boolean;
  register: UseFormRegister<FormDataType>;
  errors: FieldErrors<FormDataType>;
  validation?: object;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = "text",
  register,
  errors,
  validation,
  disabled = false,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        {...register(id, validation)}
        disabled={disabled}
      />
      {errors[id] && <p className="text-red-500">{errors[id]?.message}</p>}
    </div>
  );
};

export default InputField;
