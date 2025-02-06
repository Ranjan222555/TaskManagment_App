import { Button } from "../ui/button";

function CommonButton({ onClick, buttontext, type, disabled }) {
  return (
    <Button
      onClick={onClick || null}
      disabled={disabled || false}
      type={type || "Submit"}
      className="flex h-11  justify-center items-center px-4 py-2 mt-4 bg-black font-extrabold text-white border-none hover:bg-black hover:text-white"
    >
      {buttontext}
    </Button>
  );
}
export default CommonButton;
