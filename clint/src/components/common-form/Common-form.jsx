import CommonButton from "../common-button/Common-button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function CommonForm({ formControls = [], handleSubmit, form, btnText }) {
  //typeing mistake form to from
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {/*how form.handelsumbit is not a function*/}
        {/*typing mistake form.handleSubmit not handelSubmit*/}
        {formControls?.length > 0
          ? formControls.map((controlitem) => (
              <FormField
                key={controlitem.id}
                control={form.control}
                name={controlitem.id}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>{controlitem.label}</FormLabel>
                      {controlitem.componentType === "Input" ? (
                        <FormControl>
                          <Input
                            placeholder={controlitem.placeholder}
                            type={controlitem.type}
                            {...field}
                            value={field.value}
                            className="w-full h-[50px] border-none rounded text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                          />
                        </FormControl>
                      ) : controlitem.componentType === "select" ? (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full h-[50px] border-none rounded text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ">
                              {field.value ? (
                                <SelectValue
                                  className="text-black focus:text-black"
                                  placeholder={controlitem.placeholder}
                                />
                              ) : (
                                "select"
                              )}
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {controlitem.options.map((optionitem) => (
                              <SelectItem
                                key={optionitem.id}
                                value={optionitem.id}
                                className="text-black cursor-pointer focus:text-black"
                              >
                                {optionitem.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : null}
                    </FormItem>
                  );
                }}
              />
            ))
          : null}
        <div className="flex justify-center mt-4 items-center">
          <CommonButton type="Submit" buttontext={btnText} />
        </div>
      </form>
    </Form>
  );
}

export default CommonForm;

// function Commonform({ formcontrol = [], handelsubmit, form, btntext }) {
//   return (
//     <Form {...form}>
//       <form onSubmit={handelsubmit}>
//         {formcontrol?.length > 0
//           ? formcontrol.map((controlitem) => (
//               <FormField
//                 control={form.control}
//                 name={controlitem.id}
//                 render={({ field }) => {
//                   return (
//                     <FormItem>
//                       <FormLabel>{controlitem.label}</FormLabel>
//                       {controlitem.componentType === "Input" ? (
//                         <FormControl>
//                           <Input
//                             placeholder={controlitem.placeholder}
//                             type={controlitem.type}
//                             {...field}
//                             className="w-full h-[50px] border-none rounded text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
//                           />
//                         </FormControl>
//                       ) : controlitem.componentType === "select" ? (
//                         <Select>
//                           <FormControl>
//                             <SelectTrigger className="w-full h-[50px] border-none rounded text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ">
//                               select
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent className="bg-white">
//                             {controlitem.options.map((optionitem) => (
//                               <SelectItem className="text-black cursor-pointer focus:text-black">
//                                 {optionitem.label}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                       ) : null}
//                     </FormItem>
//                   );
//                 }}
//               />
//             ))
//           : null}
//         <CommonButton type={"Submit"} buttontext={btntext} />
//       </form>
//     </Form>
//   );
// }

// export default Commonform;
