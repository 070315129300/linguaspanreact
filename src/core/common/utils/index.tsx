import { toast } from "sonner";

export const classes = (...args: string[]) => args.join(" ");

export const addPaginationUrlQuery = (
  originalUrl: string,
  page: number | undefined = 1,
  pageSize?: number
) => {
  let url = originalUrl;
  let others = "";
  if (pageSize) {
    others += "pageSize=" + pageSize;
  }
  if (page) {
    if (others.length > 0) {
      others += "&";
    }
    others += "page=" + page;
  }

  if (others.length > 0) {
    url = url + "?" + others;
  }

  return url;
};

export const errorResponseHandler = (err: any) => {
  if (err.response && err.response.data) {
    const { errors, message } = err.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((error: string) => {
        toast.error(error);
      });
    } else if (typeof errors === "string") {
      toast.error(errors);
    } else {
      toast.error(message || "An unexpected error occurred");
    }
  } else {
    toast.error("An unexpected error occurred");
  }
};


