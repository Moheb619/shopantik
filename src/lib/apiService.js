import { supabase } from "./supabase";

export async function getAllProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(`
      id,
      name,
      slug,
      description,
      is_book,
      has_preorder,
      is_featured,
      tags,
      images,
      created_at,
      updated_at,

      categories (
        id,
        name,
        slug
      ),

      product_variants (
        id,
        price,
        old_price,
        stock,
        sku,
        image_url,
        created_at,
        updated_at
      ),

      reviews (
        id,
        rating,
        reviewer_name,
        comment,
        attach_image_urls,
        created_at,
        updated_at
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching product details:', error);
    return [];
  }

  return data;
}
export async function getSpecificProduct(productName) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories (
        id,
        name,
        slug
      ),

      books (
        *
      ),

      reviews (
        id,
        rating,
        reviewer_name,
        comment,
        attach_image_urls,
        created_at,
        updated_at
      )
    `)
    .eq('name', productName)  // ✅ Fix is here
    .single(); // also add this if you're expecting a single product

      if (error) {
    console.error('Error fetching product details:', error);
    return [];
  }

  return data;
}

export async function getAllCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching product details:', error);
    return [];
  }

  return data;
}
export async function getOrder(orderId) {
  console.log("Order id: ", orderId);
  const { data, error } = await supabase
    .from('orders')
    .select('*') 
    .eq('id', orderId)
    .single();

  console.log("Server response inside getOrder:", data);

  if (error) {
    console.error('Error fetching order details:', error);
    return null; 
  }

  return data;
}