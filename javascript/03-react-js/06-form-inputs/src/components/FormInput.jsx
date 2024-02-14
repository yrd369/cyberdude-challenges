const FormInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  required,
  register,
  error,
}) => {
  return (
    <div>
      <label className="block mb-1 text-white" htmlFor={id}>
        {label}
      </label>
      <input
        className="px-4 py-1  w-full rounded outline-none"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        // required={required}
        {...register}
      />
      {error && <small className="text-red-500 font-mono font-medium">{error.message}</small>}
    </div>
  );
};
export default FormInput;
