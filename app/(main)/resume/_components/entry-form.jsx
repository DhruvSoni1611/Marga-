"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, parse } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { entrySchema } from "@/app/lib/schema";
import { Sparkles, PlusCircle, X, Pencil, Save, Loader2 } from "lucide-react";
import { improveWithAI } from "@/actions/resume";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";

const formatDisplayDate = (dateString) => {
  if (!dateString) return "";
  const date = parse(dateString, "yyyy-MM", new Date());
  return format(date, "MMM yyyy");
};

// Configuration for different entry types
const getFieldConfig = (type) => {
  const configs = {
    experience: {
      title: {
        label: "Position/Role",
        placeholder: "e.g., Software Engineer, Marketing Manager",
      },
      organization: {
        label: "Company",
        placeholder: "e.g., Google, Microsoft, Startup Inc.",
      },
      currentLabel: "Current Position",
      description: {
        placeholder:
          "Describe your responsibilities, achievements, and key projects...",
      },
    },
    education: {
      title: {
        label: "Degree/Year",
        placeholder: "e.g., Bachelor's in Computer Science, 3rd Year",
      },
      organization: {
        label: "University/Institution",
        placeholder: "e.g., Harvard University, MIT, State University",
      },
      currentLabel: "Currently Studying",
      description: {
        placeholder:
          "Describe your coursework, projects, achievements, GPA, relevant subjects...",
      },
    },
    project: {
      title: {
        label: "Project Name",
        placeholder: "e.g., E-commerce Website, Mobile App, Data Analysis",
      },
      organization: {
        label: "Organization/Context",
        placeholder: "e.g., Personal Project, University, Hackathon, Freelance",
      },
      currentLabel: "Ongoing Project",
      description: {
        placeholder:
          "Describe the project, technologies used, your role, and outcomes...",
      },
    },
  };

  return configs[type.toLowerCase()] || configs.experience;
};

export function EntryForm({ type, entries, onChange }) {
  const [isAdding, setIsAdding] = useState(false);
  const fieldConfig = getFieldConfig(type);

  const {
    register,
    handleSubmit: handleValidation,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      title: "",
      organization: "",
      startDate: "",
      endDate: "",
      description: "",
      current: false,
    },
  });

  const current = watch("current");

  const handleAdd = handleValidation((data) => {
    const formattedEntry = {
      ...data,
      startDate: formatDisplayDate(data.startDate),
      endDate: data.current ? "" : formatDisplayDate(data.endDate),
    };

    onChange([...entries, formattedEntry]);

    reset();
    setIsAdding(false);
  });

  const handleDelete = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    onChange(newEntries);
  };

  const {
    loading: isImproving,
    fn: improveWithAIFn,
    data: improvedContent,
    error: improveError,
  } = useFetch(improveWithAI);

  // Improve result
  useEffect(() => {
    if (improvedContent && !isImproving) {
      setValue("description", improvedContent);
      toast.success("Description improved successfully!");
    }
    if (improveError) {
      toast.error(improveError.message || "Failed to improve description");
    }
  }, [improvedContent, improveError, isImproving, setValue]);

  // Replace handleImproveDescription with this
  const handleImproveDescription = async () => {
    const description = watch("description");
    if (!description) {
      toast.error("Please enter a description first");
      return;
    }

    await improveWithAIFn({
      current: description,
      type: type.toLowerCase(), // 'experience', 'education', or 'project'
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {entries.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title} @ {item.organization}
              </CardTitle>
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => handleDelete(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {item.current
                  ? `${item.startDate} - Present`
                  : `${item.startDate} - ${item.endDate}`}
              </p>
              <p className="mt-2 text-sm whitespace-pre-wrap">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>Add {type}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  {fieldConfig.title.label}
                </label>
                <Input
                  placeholder={fieldConfig.title.placeholder}
                  {...register("title")}
                  error={errors.title}
                />
                {errors.title && (
                  <p className="text-sm text-red-500">{errors.title.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  {fieldConfig.organization.label}
                </label>
                <Input
                  placeholder={fieldConfig.organization.placeholder}
                  {...register("organization")}
                  error={errors.organization}
                />
                {errors.organization && (
                  <p className="text-sm text-red-500">
                    {errors.organization.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  Start Date
                </label>
                <Input
                  type="month"
                  {...register("startDate")}
                  error={errors.startDate}
                />
                {errors.startDate && (
                  <p className="text-sm text-red-500">
                    {errors.startDate.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  End Date
                </label>
                <Input
                  type="month"
                  {...register("endDate")}
                  disabled={current}
                  error={errors.endDate}
                />
                {errors.endDate && (
                  <p className="text-sm text-red-500">
                    {errors.endDate.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="current"
                {...register("current")}
                onChange={(e) => {
                  setValue("current", e.target.checked);
                  if (e.target.checked) {
                    setValue("endDate", "");
                  }
                }}
              />
              <label htmlFor="current" className="text-sm font-medium">
                {fieldConfig.currentLabel}
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">
                Description
              </label>
              <Textarea
                placeholder={fieldConfig.description.placeholder}
                className="h-32"
                {...register("description")}
                error={errors.description}
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleImproveDescription}
              disabled={isImproving || !watch("description")}
            >
              {isImproving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Improving...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Improve with AI
                </>
              )}
            </Button>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset();
                setIsAdding(false);
              }}
            >
              Cancel
            </Button>
            <Button type="button" onClick={handleAdd}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Entry
            </Button>
          </CardFooter>
        </Card>
      )}

      {!isAdding && (
        <Button
          className="w-full"
          variant="outline"
          onClick={() => setIsAdding(true)}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add {type}
        </Button>
      )}
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { format, parse } from "date-fns";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { entrySchema } from "@/app/lib/schema";
// import { Sparkles, PlusCircle, X, Pencil, Save, Loader2 } from "lucide-react";
// import { improveWithAI } from "@/actions/resume";
// import { toast } from "sonner";
// import useFetch from "@/hooks/use-fetch";

// const formatDisplayDate = (dateString) => {
//   if (!dateString) return "";
//   const date = parse(dateString, "yyyy-MM", new Date());
//   return format(date, "MMM yyyy");
// };

// // Configuration for different entry types
// const getFieldConfig = (type) => {
//   const configs = {
//     Experience: {
//       title: {
//         label: "Position/Role",
//         placeholder: "e.g., Software Engineer, Marketing Manager",
//       },
//       organization: {
//         label: "Company",
//         placeholder: "e.g., Google, Microsoft, Startup Inc.",
//       },
//       currentLabel: "Current Position",
//       description: {
//         placeholder:
//           "Describe your responsibilities, achievements, and key projects...",
//       },
//     },
//     Education: {
//       title: {
//         label: "Degree/Year",
//         placeholder: "e.g., Bachelor's in Computer Science, 3rd Year",
//       },
//       organization: {
//         label: "University/Institution",
//         placeholder: "e.g., Harvard University, MIT, State University",
//       },
//       currentLabel: "Currently Studying",
//       description: {
//         placeholder:
//           "Describe your coursework, projects, achievements, GPA, relevant subjects...",
//       },
//     },
//     Project: {
//       title: {
//         label: "Project Name",
//         placeholder: "e.g., E-commerce Website, Mobile App, Data Analysis",
//       },
//       organization: {
//         label: "Organization/Context",
//         placeholder: "e.g., Personal Project, University, Hackathon, Freelance",
//       },
//       currentLabel: "Ongoing Project",
//       description: {
//         placeholder:
//           "Describe the project, technologies used, your role, and outcomes...",
//       },
//     },
//   };

//   return configs[type.toLowerCase()] || configs.experience;
// };

// export function EntryForm({ type, entries, onChange }) {
//   const [isAdding, setIsAdding] = useState(false);
//   const fieldConfig = getFieldConfig(type);

//   const {
//     register,
//     handleSubmit: handleValidation,
//     formState: { errors },
//     reset,
//     watch,
//     setValue,
//   } = useForm({
//     resolver: zodResolver(entrySchema),
//     defaultValues: {
//       title: "",
//       organization: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//       current: false,
//     },
//   });

//   const current = watch("current");

//   const handleAdd = handleValidation((data) => {
//     const formattedEntry = {
//       ...data,
//       startDate: formatDisplayDate(data.startDate),
//       endDate: data.current ? "" : formatDisplayDate(data.endDate),
//     };

//     onChange([...entries, formattedEntry]);

//     reset();
//     setIsAdding(false);
//   });

//   const handleDelete = (index) => {
//     const newEntries = entries.filter((_, i) => i !== index);
//     onChange(newEntries);
//   };

//   const {
//     loading: isImproving,
//     fn: improveWithAIFn,
//     data: improvedContent,
//     error: improveError,
//   } = useFetch(improveWithAI);

//   // Improve result
//   useEffect(() => {
//     if (improvedContent && !isImproving) {
//       setValue("description", improvedContent);
//       toast.success("Description improved successfully!");
//     }
//     if (improveError) {
//       toast.error(improveError.message || "Failed to improve description");
//     }
//   }, [improvedContent, improveError, isImproving, setValue]);

//   // Replace handleImproveDescription with this
//   const handleImproveDescription = async () => {
//     const description = watch("description");
//     if (!description) {
//       toast.error("Please enter a description first");
//       return;
//     }

//     await improveWithAIFn({
//       current: description,
//       type: type.toLowerCase(), // 'experience', 'education', or 'project'
//     });
//   };

//   return (
//     <div className="space-y-4">
//       <div className="space-y-4">
//         {entries.map((item, index) => (
//           <Card key={index}>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 {item.title} @ {item.organization}
//               </CardTitle>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 type="button"
//                 onClick={() => handleDelete(index)}
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-muted-foreground">
//                 {item.current
//                   ? `${item.startDate} - Present`
//                   : `${item.startDate} - ${item.endDate}`}
//               </p>
//               <p className="mt-2 text-sm whitespace-pre-wrap">
//                 {item.description}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {isAdding && (
//         <Card>
//           <CardHeader>
//             <CardTitle>Add {type}</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">
//                   {fieldConfig.title.label}
//                 </label>
//                 <Input
//                   placeholder={fieldConfig.title.placeholder}
//                   {...register("title")}
//                   error={errors.title}
//                 />
//                 {errors.title && (
//                   <p className="text-sm text-red-500">{errors.title.message}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">
//                   {fieldConfig.organization.label}
//                 </label>
//                 <Input
//                   placeholder={fieldConfig.organization.placeholder}
//                   {...register("organization")}
//                   error={errors.organization}
//                 />
//                 {errors.organization && (
//                   <p className="text-sm text-red-500">
//                     {errors.organization.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">
//                   Start Date
//                 </label>
//                 <Input
//                   type="month"
//                   {...register("startDate")}
//                   error={errors.startDate}
//                 />
//                 {errors.startDate && (
//                   <p className="text-sm text-red-500">
//                     {errors.startDate.message}
//                   </p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">
//                   End Date
//                 </label>
//                 <Input
//                   type="month"
//                   {...register("endDate")}
//                   disabled={current}
//                   error={errors.endDate}
//                 />
//                 {errors.endDate && (
//                   <p className="text-sm text-red-500">
//                     {errors.endDate.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 id="current"
//                 {...register("current")}
//                 onChange={(e) => {
//                   setValue("current", e.target.checked);
//                   if (e.target.checked) {
//                     setValue("endDate", "");
//                   }
//                 }}
//               />
//               <label htmlFor="current" className="text-sm font-medium">
//                 {fieldConfig.currentLabel}
//               </label>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Description
//               </label>
//               <Textarea
//                 placeholder={fieldConfig.description.placeholder}
//                 className="h-32"
//                 {...register("description")}
//                 error={errors.description}
//               />
//               {errors.description && (
//                 <p className="text-sm text-red-500">
//                   {errors.description.message}
//                 </p>
//               )}
//             </div>
//             <Button
//               type="button"
//               variant="ghost"
//               size="sm"
//               onClick={handleImproveDescription}
//               disabled={isImproving || !watch("description")}
//             >
//               {isImproving ? (
//                 <>
//                   <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                   Improving...
//                 </>
//               ) : (
//                 <>
//                   <Sparkles className="h-4 w-4 mr-2" />
//                   Improve with AI
//                 </>
//               )}
//             </Button>
//           </CardContent>
//           <CardFooter className="flex justify-end space-x-2">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => {
//                 reset();
//                 setIsAdding(false);
//               }}
//             >
//               Cancel
//             </Button>
//             <Button type="button" onClick={handleAdd}>
//               <PlusCircle className="h-4 w-4 mr-2" />
//               Add Entry
//             </Button>
//           </CardFooter>
//         </Card>
//       )}

//       {!isAdding && (
//         <Button
//           className="w-full"
//           variant="outline"
//           onClick={() => setIsAdding(true)}
//         >
//           <PlusCircle className="h-4 w-4 mr-2" />
//           Add {type}
//         </Button>
//       )}
//     </div>
//   );
// }
