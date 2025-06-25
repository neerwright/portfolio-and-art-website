import { createClient } from "@supabase/supabase-js";
const bucket = "main-bucket";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();

  const newName = `${timestamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: "3600",
    });
  if (!data) throw new Error("Image upload failed");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = (url: string) => {
  const imageName = url.split("/").pop();
  if (!imageName) throw new Error("Invalid URL");
  return supabase.storage.from(bucket).remove([imageName]);
};

export const uploadImages = async (images: File[]) => {
  const paths = images.map((image) => {
    console.log("------------------------------");
    console.log("image");
    console.log(image);
    console.log("------------------------------");
    return uploadImage(image);
  });

  console.log("------------------------------");
  console.log("paths");
  console.log(paths);
  console.log("------------------------------");
  return paths;
  /*
  Promise.all([...paths]).then((values) => {
    console.log("values");
    console.log(values);
    return values;
  });
  */
};
